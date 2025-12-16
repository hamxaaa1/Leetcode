/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let product1 = 1
    let product2 = 2
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            } 
        }
    }
    product1 = nums[0] * nums[1] * nums[2];
    product2 = nums[0] * nums[n - 1] * nums[n - 2];
    return Math.max(product1, product2);
};