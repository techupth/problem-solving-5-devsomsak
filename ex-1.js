function runningSum(nums) {
  let runningSumResult = [];
  let TotalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    TotalSum += nums[i];
    runningSumResult.push(TotalSum);
  }
  return runningSumResult;
}

let nums1 = [1, 2, 3, 4];
console.log(runningSum(nums1));//[ 1, 3, 6, 10 ] 
let nums2 = [1,1,1,1,1];
console.log(runningSum(nums2));//[ 1, 2, 3, 4, 5 ] 
let nums3 = [3,1,2,10,1];
console.log(runningSum(nums3));//[ 3, 4, 6, 16, 17 ]