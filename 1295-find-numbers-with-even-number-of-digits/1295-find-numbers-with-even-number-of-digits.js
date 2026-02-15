/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;
    for (let num of nums) {
        let str = String(num) 
        if(str.length %2 === 0) {
            res++
        }
    }
    return res
};
