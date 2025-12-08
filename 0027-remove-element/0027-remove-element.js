/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let n of nums) {
        if (n !== val) {
            nums[k] = n
            k++
        }
    }
    return k
};