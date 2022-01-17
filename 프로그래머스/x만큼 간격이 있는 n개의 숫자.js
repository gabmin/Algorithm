let x = 2;
let n = 5;

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

console.log(solution(x, n));

// 다른 사람 풀이 방법

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// n개의 배열을 만들어 x로 채운다움 각각 i만큼 곱해준다.
