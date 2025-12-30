/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let arr = []
    arr1.sort((a, b) => a - b)
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                arr.push(arr1[j])
            }
        }
    }
        for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }

    console.log(arr)
    return arr
};