let n = 12;

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((a, b) => a + b);
}

console.log(solution(n));

function solution(n) {
  let answer = 0;
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      answer += i;
    }
    i++;
  }
  return answer;
}
