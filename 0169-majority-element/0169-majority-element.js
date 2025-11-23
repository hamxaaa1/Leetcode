/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let maxElement = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    for (const key in obj) {
        if (obj[key] > count) {
            count = obj[key]
            maxElement = Number(key)
        }
    }
    return maxElement
};