const app = document.getElementById("app");
app.innerHTML = "⏳ 載入中...";

async function getBinancePrice(symbol = "ETHUSDT") {
  const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
  const data = await res.json();
  return parseFloat(data.price);
}

async function main() {
  const eth = await getBinancePrice("ETHUSDT");
  const btc = await getBinancePrice("BTCUSDT");

  app.innerHTML = `
    <h1>ETH/BTC 即時價格</h1>
    <p>ETH: $${eth.toFixed(2)}</p>
    <p>BTC: $${btc.toFixed(2)}</p>
    <p>預測：${eth > 3500 ? "📈 看漲" : "📉 看跌"}</p>
  `;
}

main();
