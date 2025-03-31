import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { format } from 'date-fns';

export default function CostOfEquityTool() {
  const [ticker, setTicker] = useState("AAPL");
  const [startDate, setStartDate] = useState("2010-01-01");
  const [endDate, setEndDate] = useState(() => format(new Date(), "yyyy-MM-dd"));
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    setLoading(true);
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticker, startDate, endDate })
    });
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-cyan-400">Cost of Equity Explorer</h1>

      <Card className="w-full max-w-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl border border-zinc-700">
        <CardContent className="p-6 space-y-4">
          <div>
            <Label>Ticker</Label>
            <Select value={ticker} onValueChange={setTicker}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select ticker" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AAPL">AAPL</SelectItem>
                <SelectItem value="MSFT">MSFT</SelectItem>
                <SelectItem value="GOOGL">GOOGL</SelectItem>
                <SelectItem value="TSLA">TSLA</SelectItem>
                <SelectItem value="AMZN">AMZN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <Label>Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="flex-1">
              <Label>End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>

          <Button onClick={handleCalculate} disabled={loading} className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700">
            {loading ? "Calculating..." : "Calculate Cost of Equity"}
          </Button>
        </CardContent>
      </Card>

      {results && (
        <div className="w-full max-w-xl space-y-4">
          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-cyan-300">CAPM Results</h2>
              <p>Intercept: {results.capm.intercept.toFixed(4)}</p>
              <p>Beta: {results.capm.beta.toFixed(4)}</p>
              <p>R²: {results.capm.R2.toFixed(4)}</p>
              <p>Expected Return: {(results.capm.expected_return_annual * 100).toFixed(2)}%</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 border border-zinc-700">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-cyan-300">Fama-French 3-Factor Results</h2>
              <p>Intercept: {results.ff3.intercept.toFixed(4)}</p>
              <p>Beta (Mkt-RF): {results.ff3.beta_mkt.toFixed(4)}</p>
              <p>Beta (SMB): {results.ff3.beta_smb.toFixed(4)}</p>
              <p>Beta (HML): {results.ff3.beta_hml.toFixed(4)}</p>
              <p>R²: {results.ff3.R2.toFixed(4)}</p>
              <p>Expected Return: {(results.ff3.expected_return_annual * 100).toFixed(2)}%</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
