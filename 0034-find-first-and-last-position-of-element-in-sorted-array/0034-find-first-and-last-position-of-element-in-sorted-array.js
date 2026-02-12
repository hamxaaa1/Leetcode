/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let leftIndex = -1
    let rightIndex = -1
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (nums[mid] === target) {
            leftIndex = mid
        }
        if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] >= target) {
            end = mid - 1
        }
    }
     start = 0
     end = nums.length - 1
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (nums[mid] === target) {
            rightIndex = mid
        }
        if (nums[mid] > target) {
            end = mid - 1
        } else if (nums[mid] <= target) {
            start = mid + 1
        }
    }
    return [leftIndex, rightIndex]
    
};