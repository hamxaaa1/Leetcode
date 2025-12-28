/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let length = 1;
    let maxLength = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            length++;
        } else {
            length = 1;
        }
        if (maxLength < length) {
            maxLength = length;
        }
    }
    return maxLength;
};