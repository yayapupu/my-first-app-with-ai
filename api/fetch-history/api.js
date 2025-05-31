const fetch = require('node-fetch');
const fs = require('fs');

async function fetchKlines(symbol = "BTCUSDT", interval = "1h", limit = 1000) {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.map(d => ({
    timestamp: d[0],
    open: d[1],
    high: d[2],
    low: d[3],
    close: d[4],
    volume: d[5]
  }));
}

async function saveToFile(symbol) {
  const data = await fetchKlines(symbol);
  const filePath = `./fetch-history/${symbol}_1h.json`;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Saved: ${filePath}`);
}

module.exports = { fetchKlines, saveToFile };
