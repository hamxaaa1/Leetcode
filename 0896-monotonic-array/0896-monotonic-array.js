/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length === 1) return true
    let flag1 = false;
    let flag2 = false;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i+1]) {
            flag1 = true
        } else {
            flag1 = false
            break
        }
    }
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] >= nums[j+1]) {
            flag2 = true
        } else {
            flag2 = false
            break
        }
    }
    return flag1 || flag2
};