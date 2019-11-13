/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits.length === 0)
        return [1];
    var last = digits.length - 1;
    if(digits[last] === 9) {
        return plusOne(digits.slice(0, last)).concat([0]);
    }
    return digits.slice(0, last).concat([digits[last] + 1]);
};
console.log( plusOne([1,2,3]) );
console.log( plusOne( [4,3,2,1] ) );
console.log( plusOne( [9] ) );
console.log( plusOne( [9,9] ) );