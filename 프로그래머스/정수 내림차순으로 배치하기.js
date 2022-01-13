let n = 118372;

function solution(n) {
  let answer = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +answer;
}

console.log(solution(n));

//다른 사람 풀이 방법
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
