/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
    let lonely = {}
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        lonely[nums[i]] = (lonely[nums[i]] || 0) + 1
    }
    for (const key in lonely) {
        let num = Number(key)
        if (lonely[key] === 1 && !lonely[num + 1] && !lonely[num - 1]) {
            arr.push(num)
        }
    }
    return arr
};