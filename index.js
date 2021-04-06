const open = require('open');
const promptly = require('promptly');

const {checkFor3070AtBestBuy} = require("./utils");

/** Constants */
let numTries = 1;
const cardDetails = {
    "id": 6429442,
    "url": "https://api.bestbuy.com/click/-/6429442/cart",
};

/** Let's do this */
(async function() {
    console.log(`Checking for available RTX 3070 at BestBuy...`);

    const onSuccess = () => {
        console.log("Found it! Opening URL now...");
        open(cardDetails.url);
    };

    checkFor3070AtBestBuy(3000, onSuccess);
})();
