/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // let min = Infinity
    // for(let n of nums1) {
    //     let start = 0;
    //     let end = nums2.length - 1
    //     while(start <= end) {
    //         let mid = Math.floor((start + end) / 2)
    //         if (nums2[mid] === n) {
    //             if (nums2[mid] < min) {
    //                 min = nums2[mid]
    //             }
    //         }
    //         if (n < nums2[mid]) {
    //             end = mid - 1
    //         } else {
    //             start = mid + 1 
    //         }
    //     }
    // }
    // console.log(min)
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
      if(nums1[i] === nums2[j]) {
        return nums1[i]
      }
      if (nums1[i] < nums2[j]) {
        i++
      } else {
        j++
      }
    }
    return -1;
};