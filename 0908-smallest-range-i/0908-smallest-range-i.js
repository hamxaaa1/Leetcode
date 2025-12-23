/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min = Infinity;
    let max = -Infinity;

    for (let num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    return Math.max(0, (max - min) - 2 * k);
};