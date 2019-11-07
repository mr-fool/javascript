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
//or
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i++] == nums[i]) {
            nums.splice(i--, 1)
        }
    }
    
};
