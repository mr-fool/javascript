/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var convertToString = x.toString();
    var reverseString = convertToString.split("").reverse().join("");
    if (reverseString == x) {
        return true;
    }
    else {
        return false;
    }
};
