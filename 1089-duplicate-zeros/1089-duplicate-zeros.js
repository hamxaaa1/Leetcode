/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let zeros = 0;

    // Count zeros that can be duplicated without exceeding length
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) zeros++;
    }

    let i = n - 1;
    let j = n + zeros - 1; // virtual new index if array were bigger

    while (i >= 0) {
        if (j < n) arr[j] = arr[i]; // only write if within bounds

        if (arr[i] === 0) {
            j--;
            if (j < n) arr[j] = 0; // duplicate zero
        }

        i--;
        j--;
    }
};