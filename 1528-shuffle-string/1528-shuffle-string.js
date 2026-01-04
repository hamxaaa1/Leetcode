/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const filled = new Array(indices.length).fill(0);
    let str = ""
    for (let i = 0; i < indices.length; i++) {
        filled[indices[i]] = s[i]
    }
    for (let j = 0; j < indices.length; j++) {
        str += filled[j]
    }
    console.log(filled) 
    console.log(str) 
    return str
};