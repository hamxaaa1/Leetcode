/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < target.length; i++) {
        obj1[arr[i]] = (obj1[arr[i]] || 0) + 1;
        obj2[target[i]] = (obj2[target[i]] || 0) + 1;
    }
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true
    }
    return false
};