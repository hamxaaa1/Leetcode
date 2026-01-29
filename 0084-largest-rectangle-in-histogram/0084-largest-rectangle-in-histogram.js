/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let ans = 0;
    let rightArray = Array(n).fill(0);
    let leftArray = Array(n).fill(0);
    let stack = []
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        rightArray[i] = stack.length === 0 ? n : stack[stack.length - 1]
        stack.push(i)
    }
    while (stack.length !== 0) {
        stack.pop()
    }
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        leftArray[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
        stack.push(i)
    }
    for (let i = 0; i < n; i++) {
        let width = rightArray[i] - leftArray[i] - 1;
        let currentArea = heights[i] * width;
        if (currentArea > ans) {
            ans = currentArea;
        }
    }
    return ans;

};