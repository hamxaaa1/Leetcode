/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return num
    let low = 0;
    let high = num - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (mid * mid === num) return true
        if (mid * mid > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return false
};