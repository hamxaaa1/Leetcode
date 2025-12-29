/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let arrLength = arr.length;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  console.log(obj)
  for (const key in obj) {
    let perc = (obj[key] * 100) / arrLength;
    if (perc > 25) {
        return Number(key);
    }
  }
};