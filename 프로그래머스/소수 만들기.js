let nums = [1, 2, 7, 6, 4];

function solution(nums) {
  // 3개를 추출하여 더한 모든 경우의 수 구하기
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (count_number(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function count_number(n) {
  // 소수인지 판별하는 함수
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(nums));
