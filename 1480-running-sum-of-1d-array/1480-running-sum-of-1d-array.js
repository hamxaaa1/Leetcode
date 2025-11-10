/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    let i = nums.length - 1
    while (i > 0) {
        for (let k = 0; k < i; k++) {
            nums[i] += nums[k]
        }
        i--
    }

    return nums
};