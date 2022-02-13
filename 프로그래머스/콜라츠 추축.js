let num = 6;

function solution(num) {
  function cal(n, cnt) {
    if (n === 1) {
      return cnt;
    }
    if (cnt >= 500) {
      return -1;
    }
    if (n % 2 === 0) {
      cnt++;
      return cal(n / 2, cnt);
    }
    if (n % 2 !== 0) {
      cnt++;
      return cal(n * 3 + 1, cnt);
    }
  }
  return cal(num, 0);
}

console.log(cal(num, 0));

// 다른 사람 풀이 방법
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
