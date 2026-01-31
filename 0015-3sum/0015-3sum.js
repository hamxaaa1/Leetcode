/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1] && i !== 0) continue;
        let target = -nums[i];
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (sum < target) {
                start++;
            } else if (sum > target) {
                end--;
            } else if (sum === target) {
                result.push([nums[i], nums[start], nums[end]]);
                while (start < end && nums[start] === nums[start + 1]) {
                    start++;
                }
                while (start < end && nums[end] === nums[end - 1]) {
                    end--;
                }
                start++;
                end--;
            }
        }
    }
    return result;
};