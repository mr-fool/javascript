/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const arr= strs.concat().sort();
    const a1= arr[0];
    const a2= arr[arr.length-1];
    if (a1 === undefined || a1.length == 0) {
        return [];
    }
    const L= a1.length;
    let i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) {
        i++
    }
    return a1.substring(0, i);

};
console.log( longestCommonPrefix(["flower","flow","flight"]) );