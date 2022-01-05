let a = 5;
let b = 3;

function solution(a, b) {
  let answer = 0;

  for (let i = a > b ? b : a; i <= (a > b ? a : b); i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(solution(a, b));

// 다른 사람 풀이 방법 1
function solution(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// 다른 사람 풀이 방법 2
// 가우스의 재림
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
