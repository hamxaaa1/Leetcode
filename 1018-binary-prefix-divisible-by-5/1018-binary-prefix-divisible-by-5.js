/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {


        let arr = [];
        let curr = 0;

        for (let bit of nums) {
            curr = (curr * 2 + bit) % 5;
            arr.push(curr === 0);
        }

        return arr;


    // let arr = [];
    // let binaryNumber = "";
    // for (let i = 0; i < nums.length; i++) {
    //     binaryNumber += nums[i];
    //     let sum = 0
    //     let count = 0;
    //     for (let j = binaryNumber.length - 1; j >= 0; j--) {
    //         let decimalNumber = null
    //         if (binaryNumber[j] == "1") {
    //             decimalNumber = 2 ** count
    //             sum+= decimalNumber
    //         }
    //         count++
    //     }
    //     count = 0;
    //     if (sum  % 5 === 0) {
    //         arr.push(true)
    //     } else {
    //         arr.push(false)
    //     }
    // }
    // return arr
};