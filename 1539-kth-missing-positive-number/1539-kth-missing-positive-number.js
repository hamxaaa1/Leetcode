/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    const max = Math.max(...arr);
    const total = max + k;
    let arr1 = []
    for (let i = 1; i <= total; i++) {
        arr1.push(i)
    }
    const uniqueNumbers = new Set(arr1);
    for (let j = 0; j < arr.length; j++) {
       if (uniqueNumbers.has(arr[j])) {
        uniqueNumbers.delete(arr[j])
       }
    }
    const uniqueArray = Array.from(uniqueNumbers);
    console.log(max)
    console.log(total)
    console.log(arr1)
    console.log(uniqueNumbers)
    console.log(uniqueArray[k - 1])
    return uniqueArray[k - 1]
};