/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {}
    let output = []
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1
    }

    let j = 0
    for (const key in count) {
        if (j < k) {
            output.push(Number(key))
            j++
        } else if (j === k) {
            break
        }
    }
    console.log(count)
    console.log(output)
    return output
};