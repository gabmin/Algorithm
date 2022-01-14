let n = 12345;

function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((e) => +e);
}

//다른 사람 풀이 방법

function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
