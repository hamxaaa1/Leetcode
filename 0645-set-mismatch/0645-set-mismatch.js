/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // let arr = []
    // let n = 1;
    // // for (let j = 0; j < nums.length; j++) {
    // //     for (let k = j + 1; k < nums.length; k++) {
    // //         if (nums[j] > nums[k]) {
    // //             let temp = nums[j]
    // //             nums[j] = nums[k]
    // //             nums[k] = temp
    // //         }
    // //     }
    // // }
    // for (let i = 0; i < nums.length; i++) {
    //     let found = false
    //     if (nums[i] === nums[i + 1]) {
    //         arr.push(nums[i])
    //     }
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[j] === n) {
    //             found = true
    //         }
    //     }
    //     if (!found) {
    //         arr.push(n)
    //     }
    //     n++

    // }
    // return arr
    let seen = {};
    let duplicate = -1;
    let missing = -1;

    // find duplicate
    for (let n of nums) {
        if (seen[n]) duplicate = n;
        seen[n] = true;
    }

    // find missing
    for (let i = 1; i <= nums.length; i++) {
        if (!seen[i]) missing = i;
    }

    return [duplicate, missing];
};