/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSalary = Infinity 
    let maxSalary = 0
    let length = salary.length - 2;
    let avgSalary = 0;
    for (let n of salary) {
        if (n > maxSalary) {
            maxSalary = n;
        }
        if (n < minSalary) {
            minSalary = n;
        }
    }
    for (let n of salary) {
        if (n === maxSalary || n === minSalary) {
            continue;
        }
        avgSalary += n;
    }

    console.log(maxSalary)
    console.log(minSalary)
    console.log(avgSalary)
    console.log(avgSalary / length)
    return avgSalary / length
};