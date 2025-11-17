/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let arr = []
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]] = true
    }
    for (let j = 1; j <= nums.length; j++) {
        if (!seen[j]) {
            arr.push(j)
        }
    }
    return arr

};