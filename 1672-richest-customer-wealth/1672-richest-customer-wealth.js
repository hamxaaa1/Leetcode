/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let totalSum = 0;
        let arr = accounts[i]
        for (let j = 0; j < arr.length; j++) {
            totalSum += accounts[i][j]
        }
        if (totalSum > maxWealth) {
            maxWealth = totalSum
        }
    }
    return maxWealth
};