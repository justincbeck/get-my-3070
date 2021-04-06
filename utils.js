const axios = require('axios').default;

/** checkFor3070AtBestBuy
 * Recursively checks for 'Add To Cart'.
 * @param checkInterval - How often to check in ms
 * @param onSuccess - Callback function for successful redirect
 */
module.exports.checkFor3070AtBestBuy = async function checkFor3070AtBestBuy(checkInterval, onSuccess, numTries = 1) {
    const cardUrl = 'https://www.bestbuy.com/site/nvidia-geforce-rtx-3070-8gb-gddr6-pci-express-4-0-graphics-card-dark-platinum-and-black/6429442.p?skuId=6429442';
    axios.get(cardUrl)
        .then(response => {
            if (response.data.indexOf("Sold Out") > 0) {
                setTimeout(() => {
                    console.log("Still sold out. Trying again...");
                    console.log("Number of tries", numTries);
                    console.log("");
                    numTries++;

                    checkFor3070AtBestBuy(checkInterval, onSuccess, numTries);
                }, checkInterval);
            } else {
                onSuccess();
            }
        });
}
