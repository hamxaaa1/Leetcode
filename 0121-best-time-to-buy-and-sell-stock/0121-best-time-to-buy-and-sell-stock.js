/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let max = 0
    while (r < prices.length) {
        if (prices[l] > prices[r]) {
            l = r
        } else {
            let maxProfit = prices[r] - prices[l]
            if (maxProfit > max){
                max = maxProfit
            }
        }
            r++
    }
    return max


};