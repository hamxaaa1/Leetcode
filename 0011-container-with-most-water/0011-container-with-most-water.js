/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    while(start < end) {
        let mostWater = (end - start) * (Math.min(height[end], height[start]))
        if (mostWater > max) {
            max = mostWater
        }
        if (height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    return max
};