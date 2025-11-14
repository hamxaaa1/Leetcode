/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    let i = 0;
    let length = n
    while(i < length) {
        arr.push(nums[i])
        arr.push(nums[n])
        i++
        n++
    }
    return arr
};