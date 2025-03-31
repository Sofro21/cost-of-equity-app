from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict
import numpy as np
import pandas as pd
import yfinance as yf
from pandas_datareader import data as pdr

app = FastAPI()

# Allow frontend on localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    ticker: str
    startDate: str
    endDate: str

def get_monthly_returns(ticker, start_date, end_date):
    data = yf.download(ticker, start=start_date, end=end_date)
    prices = data['Adj Close'] if 'Adj Close' in data.columns else data['Close']
    monthly_prices = prices.resample('M').last().sort_index()
    returns = monthly_prices.pct_change().dropna()
    returns.index = returns.index.normalize()
    return returns

def get_ff3_factors(start_date, end_date):
    ff = pdr.DataReader('F-F_Research_Data_Factors', 'famafrench', start_date, end_date)[0] / 100.0
    ff.index = ff.index.to_timestamp(how='end').normalize()
    return ff

def regression_stats(X, y, coeffs):
    predictions = X @ coeffs
    residuals = y - predictions
    SSE = np.sum(residuals ** 2)
    SST = np.sum((y - y.mean()) ** 2)
    R2 = 1 - SSE / SST
    return R2

@app.post("/calculate")
async def calculate(query: Query):
    stock_ret = get_monthly_returns(query.ticker, query.startDate, query.endDate)
    market_ret = get_monthly_returns("^GSPC", query.startDate, query.endDate)
    ff = get_ff3_factors(query.startDate, query.endDate)

    df = pd.concat([stock_ret, market_ret, ff], axis=1).dropna()
    df.columns = ["stock", "market", "Mkt-RF", "SMB", "HML", "RF"]
    df["excess_stock"] = df["stock"] - df["RF"]
    df["excess_market"] = df["market"] - df["RF"]

    # CAPM
    X_capm = np.vstack([np.ones(len(df)), df["excess_market"]]).T
    y_capm = df["excess_stock"].values
    coeffs_capm = np.linalg.lstsq(X_capm, y_capm, rcond=None)[0]
    expected_monthly_capm = df["RF"].mean() + coeffs_capm[1] * df["excess_market"].mean()
    expected_annual_capm = (1 + expected_monthly_capm) ** 12 - 1
    R2_capm = regression_stats(X_capm, y_capm, coeffs_capm)

    # FF3
    X_ff3 = np.column_stack([np.ones(len(df)), df[["Mkt-RF", "SMB", "HML"]].values])
    y_ff3 = df["excess_stock"].values
    coeffs_ff3 = np.linalg.lstsq(X_ff3, y_ff3, rcond=None)[0]
    expected_monthly_ff3 = (
        coeffs_ff3[1] * df["Mkt-RF"].mean()
        + coeffs_ff3[2] * df["SMB"].mean()
        + coeffs_ff3[3] * df["HML"].mean()
        + df["RF"].mean()
    )
    expected_annual_ff3 = (1 + expected_monthly_ff3) ** 12 - 1
    R2_ff3 = regression_stats(X_ff3, y_ff3, coeffs_ff3)

    return {
        "capm": {
            "intercept": coeffs_capm[0],
            "beta": coeffs_capm[1],
            "expected_return_annual": expected_annual_capm,
            "R2": R2_capm,
        },
        "ff3": {
            "intercept": coeffs_ff3[0],
            "beta_mkt": coeffs_ff3[1],
            "beta_smb": coeffs_ff3[2],
            "beta_hml": coeffs_ff3[3],
            "expected_return_annual": expected_annual_ff3,
            "R2": R2_ff3,
        }
    }
