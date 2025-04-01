import React, { useState } from 'react';

export default function CostOfEquityTool() {
  const [ticker, setTicker] = useState("AAPL");
  const [startDate, setStartDate] = useState("2010-01-01");
  const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    setLoading(true);
    const response = await fetch("https://cost-of-equity-app.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticker, startDate, endDate })
    });
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Cost of Equity Explorer</h1>

      <div className="card">
        <label>Ticker</label>
        <select value={ticker} onChange={(e) => setTicker(e.target.value)}>
          <option value="AAPL">AAPL</option>
          <option value="MSFT">MSFT</option>
          <option value="GOOGL">GOOGL</option>
          <option value="TSLA">TSLA</option>
          <option value="AMZN">AMZN</option>
        </select>

        <div className="date-row">
          <div>
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <button onClick={handleCalculate} disabled={loading}>
          {loading ? "Calculating..." : "Calculate Cost of Equity"}
        </button>
      </div>

      {results && (
        <div className="results">
          <div className="result-box">
            <h2>CAPM Results</h2>
            {/* <p>Intercept: {results.capm.intercept.toFixed(4)}</p> */}
            {/* <p>Beta: {results.capm.beta.toFixed(4)}</p>
            <p>R²: {results.capm.R2.toFixed(4)}</p>
            <p>Expected Return: {(results.capm.expected_return_annual * 100).toFixed(2)}%</p>
          </div>

          <div className="result-box">
            <h2>Fama-French 3-Factor Results</h2>
            <p>Intercept: {results.ff3.intercept.toFixed(4)}</p>
            <p>Beta (Mkt-RF): {results.ff3.beta_mkt.toFixed(4)}</p>
            <p>Beta (SMB): {results.ff3.beta_smb.toFixed(4)}</p>
            <p>Beta (HML): {results.ff3.beta_hml.toFixed(4)}</p>
            <p>R²: {results.ff3.R2.toFixed(4)}</p>
            <p>Expected Return: {(results.ff3.expected_return_annual * 100).toFixed(2)}%</p> */}
          </div>
        </div>
      )}
    </div>
  );
}
