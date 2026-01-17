/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let str1 = "";
    let str2 = "";
    for (let i = 0; i < word1.length; i++) {
        str1 = str1 + word1[i];
    }
    for (let j = 0; j < word2.length; j++) {
        str2 = str2 + word2[j];
    }
    console.log(str1);
    console.log(str2);
    return str1 === str2;
};