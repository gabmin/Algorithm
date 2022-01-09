let x = 10;

function solution(x) {
  let arr = String(x).split("");
  let cal = arr.reduce((a, b) => Number(a) + Number(b));

  return x % cal === 0 ? true : false;
}

console.log(solution(x));

//다른 사람 풀이 방법
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
