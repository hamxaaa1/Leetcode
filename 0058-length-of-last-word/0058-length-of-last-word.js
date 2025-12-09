/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let trim = s.trim().split(" ")
    let lastWord = trim.length - 1;

    return trim[lastWord].length
};