/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutives = 0;
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 1) {
            count++
            if (count > maxConsecutives) {
                maxConsecutives = count
            }
        } else {
            count = 0
        }
        i++
    }
    return maxConsecutives
};