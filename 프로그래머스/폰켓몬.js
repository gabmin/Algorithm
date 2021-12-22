let nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  const answer = new Set(nums);
  if (answer.size > nums.length / 2) {
    return nums.length / 2;
  }
  return answer.size;
}

console.log(solution(nums));

// 다른 사람 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
