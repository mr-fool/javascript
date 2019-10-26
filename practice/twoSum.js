var twoSum = function(nums, target) {
	let seen = {};
  for (let i = 0; i < nums.length; i++) {
  	var diff = (target - nums[i]);
    if (seen[diff] != null) {
    	return [seen[diff],i];
    }
    seen[nums[i]] = i;
  }
};
