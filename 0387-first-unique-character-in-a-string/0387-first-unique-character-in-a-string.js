/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let flag = true
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                flag = false
                break
            }
        }
        if (flag) {
            return i
        }
    }
    return -1
};