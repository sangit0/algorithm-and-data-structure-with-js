var maxProfit = function (prices) {
  let profit = 0;

  for (let n = 1; n < prices.length; n++) {
    let temp = prices[n] - prices[n - 1];
    let tempMax = profit + temp;
    if (tempMax > temp && tempMax > profit) {
      buyPrice = prices[n];
      profit = tempMax;
    } else {
      if (temp > profit) {
        profit = temp;
      }
    }
  }
};

maxProfit([1, 2, 3, 4, 5]);
