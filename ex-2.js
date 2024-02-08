function moveZeroes(nums) {
  let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!nums[i] == 0) {
      result.push(nums[i]);
    } else {
      count += 1;
    }
  }
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
}

let nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1)); //[ 1, 3, 12, 0, 0 ]
let nums2 = [0];
console.log(moveZeroes(nums2)); //[ 0 ]
