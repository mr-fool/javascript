/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var sqrt = Math.sqrt(x);
    var finalAnswer = Math.trunc(sqrt);
    return finalAnswer;
};
console.log(mySqrt(4));
console.log(mySqrt(8));