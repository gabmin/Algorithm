let n = 3;

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer = answer + "수";
    } else {
      answer = answer + "박";
    }
  }
  return answer;
}

console.log(solution(n));

//다른 사람 풀이 방법
const waterMelon = (n) => "수박".repeat(n).slice(0, n);
