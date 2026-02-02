/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let maxLeft = Array(n).fill(0)
    let maxRight = Array(n).fill(0)
    maxLeft[0] = height[0]
    for(let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
    }
    maxRight[n-1] = height[n-1]
    for(let i = n-2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i])
    }
    let maxTrap = 0
    for(let i = 0; i < n; i++) {
        let sum = Math.min(maxLeft[i], maxRight[i]) - height[i]
            maxTrap += sum
    }
    return maxTrap

};