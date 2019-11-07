/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)){
        return nums.indexOf(target);
    }
    else {
        nums.push(target);
        nums.sort((a, b) => a - b);
        return nums.indexOf(target);
    }
};
console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));

console.log(searchInsert([3,5,7,9,10], 8)); //3