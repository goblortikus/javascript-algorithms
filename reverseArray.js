// by Monir Mamoun
// obviously not the "optimal" javascript way (.reverse) but rather just an exercise
nums = [1];

for (x=0; x<nums.length/2; x++) {
	temp = nums[x];
	nums[x] = nums[nums.length-1-x];
	nums[nums.length-1-x] = temp; 
}

console.log(nums);
