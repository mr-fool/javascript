/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    
    var memory1 = {};
    var memory2 = {};
    
    for (var i=0; i<nums.length; i++) {
        if (memory1[nums[i]]) {
            // We've already seen this number, so move it to the second hash.
            delete memory1[nums[i]];
            memory2[nums[i]] = 1;
        }
        else {
            // Mark this number as seen.
            memory1[nums[i]] = 1;
        }
    }
    
    result = parseInt(Object.keys(memory1)[0]);
    
    return result;
};
