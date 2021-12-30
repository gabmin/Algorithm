let n = 10;

function solution(n) {
  const n1234 = [4, 1, 2];
  let answer = "";
  while (n) {
    answer = n1234[n % 3] + answer;

    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}

console.log(solution(n));

// 다른 사람 풀이 방법

function change124(n) {
  return n === 0
    ? ""
    : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

console.log(change124(n));
