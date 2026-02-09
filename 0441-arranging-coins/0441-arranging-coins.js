/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n < 2) return n
    let low = 0;
    let high = n - 1;
    let row = 1
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(mid * (mid + 1) / 2 <= n) {
            low = mid + 1
        } else { 
            high = mid - 1
        }
    }
    return high
};