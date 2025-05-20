import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const res = await fetch(`/api/recommend?symbol=${symbol}`);
    const data = await res.json();
    setResult(data.message || "لا توجد توصية.");
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📈 توصيات الأسهم لحظيًا</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="border p-2 flex-grow rounded"
          placeholder="أدخل رمز السهم مثل AAPL"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          تحليل
        </button>
      </form>
      {loading ? <p>⏳ جاري التحليل...</p> : <p className="whitespace-pre-wrap">{result}</p>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
