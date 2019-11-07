/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i--,1);
        }
    }
};
console.log(removeElement([0,1,2,2,3,0,4,2],2));
// another solution
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = nums.length; i--;) {
        if (nums[i] === val) {
            nums.splice(i,1);
        }
    }
};

let i = 0;
while (i < nums.length) if (
// i gets increased by one
  nums[i++] ==  nums[i]
) nums.splice(i--, 1)
// if we splice, the length of the array changes and i will now be at an index higher than expected, so we decrement it