/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let low = 0;
    let high = x - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        if (mid * mid === x) return mid
        if (mid * mid > x) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    } 
    return high
};