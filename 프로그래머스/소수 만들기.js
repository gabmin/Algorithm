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

// 두 번째 풀이 방법
function solution(nums) {
  // 소수 판별
  let result = 0;
  const cases = Combinations(nums, 3);
  const answer = cases.map((e) => e.reduce((arr, cur) => arr + cur, 0));
  answer.map((e) => {
    if (e <= 1) {
      return;
    }
    if (e === 2 || e === 3) {
      result++;
      return;
    }
    if (e % 2 === 0) {
      return;
    }

    let divisor = 3;
    let limit = Math.sqrt(e);

    while (limit >= divisor) {
      if (e % divisor === 0) {
        return;
      }
      divisor += 2;
    }
    result++;
    return;
  });

  return result;
}

// 조합
function Combinations(arr, n) {
  const res = [];
  if (n === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((v, i, arr) => {
    const rest = arr.slice(i + 1);
    const combination = Combinations(rest, n - 1);
    const attach = combination.map((com) => [v, ...com]);
    res.push(...attach);
  });
  return res;
}
