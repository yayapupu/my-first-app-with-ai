const { saveToFile } = require('./api');

async function main() {
  await saveToFile("BTCUSDT");
  await saveToFile("ETHUSDT");
}

main();
