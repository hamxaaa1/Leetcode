/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let obj = {};
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    console.log(obj)
    for (const key in obj) {
        if (obj[key] === 1) {
            sum = sum + Number(key);
        }
    }
    console.log(sum);
    return sum;
};
