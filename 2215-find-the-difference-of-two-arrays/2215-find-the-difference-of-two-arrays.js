/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let onlyInNums1 = [];
    let onlyInNums2 = [];


    for (let num of set1) {
        if (!set2.has(num)) {//1 
            onlyInNums1.push(num);
        }
    }


    for (let num of set2) {
        if (!set1.has(num)) {
            onlyInNums2.push(num);
        }
    }

    return [onlyInNums1, onlyInNums2];
};