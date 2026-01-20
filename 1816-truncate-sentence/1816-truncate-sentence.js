/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(" ")
    let str = ""
    for (let i = 0; i < k; i++) {
        str += s[i]
        if (i === k - 1) {
            break;
        }
        str += " "

    }
    return str
};