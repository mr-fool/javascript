/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Number.MAX_VALUE;
    var prev = 0;
    for (var i = 0; i < nums.length; i++) {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(max, prev);
    }
    return max;
  };


console.log(maxSubArray([-2,-1]));
console.log(maxSubArray(  [-2,1,-3,4,-1,2,1,-5,4] ));
console.log(maxSubArray([-1,-2]));
