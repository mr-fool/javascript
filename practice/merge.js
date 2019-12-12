/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {   
    nums1.splice(m,n,...nums2); //Merges the arrays. Replaces the zeroes with nums2 using spread
    nums1.sort((a, b) => a - b);   //Sorts the array nummerically
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));