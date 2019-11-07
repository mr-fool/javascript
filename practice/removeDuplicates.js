/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var set = new Set(nums);
    nums = Array.from(set);
    return nums;
};
console.log(removeDuplicates([1,1,2]));