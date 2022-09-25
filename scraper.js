import * as cheerio from "cheerio";
import fetch from "node-fetch";
import fs from "fs";

export default async function getPrices() {
  try {
    const cryptos = [
      "https://coinmarketcap.com/currencies/bitcoin/",
      "https://coinmarketcap.com/currencies/bnb/",
      "https://coinmarketcap.com/currencies/cosmos/",
      "https://coinmarketcap.com/currencies/ethereum/",
      "https://coinmarketcap.com/currencies/tether/",
      "https://coinmarketcap.com/currencies/bnb/",
      "https://coinmarketcap.com/currencies/xrp/",
      "https://coinmarketcap.com/currencies/cardano/",
      "https://coinmarketcap.com/currencies/solana/",
      "https://coinmarketcap.com/currencies/dogecoin/",
      "https://coinmarketcap.com/currencies/polkadot-new/",
      "https://coinmarketcap.com/currencies/polygon/",
      "https://coinmarketcap.com/currencies/shiba-inu/",
      "https://coinmarketcap.com/currencies/tron/"
    ];

    const requests = cryptos.map((url) =>
      fetch(url, {
        // headers: {
        //   "Access-Control-Allow-Origin": '*',
        // },
        // credentials: "include",
      })
    );
    const responses = await Promise.all(requests);
    const promises = responses.map((response) => response.text());
    const texts = await Promise.all(promises);

    const nameAndPrice = [];
    texts.map((text, index) => {
      const $ = cheerio.load(text);
      const cname = $(".nameHeader > h2 > .nameSymbol").text();
      const price = $(".priceValue > span").text();
      const coinurl = cryptos[index] 
      console.log(`${cname}: ${price} USD. URL: ${coinurl}`);
      nameAndPrice.push({
        cname,
        price,
        coinurl
      });
    });

    // return nameAndPrice;

    fs.writeFile("prices.json", JSON.stringify(nameAndPrice), function (err) {
      if (err) return console.log(err);
      console.log("logged!");
    });
  } catch (error) {
    console.log(error);
  }
}

getPrices();
