let dartResult = "10S10S#10S";

function solution(dartResult) {
  let score = 0;
  let cnt = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = +dartResult[i - 1] === 1 ? 10 : +dartResult[i];
    } else if (dartResult[i] === "S") {
      cnt.push(score);
    } else if (dartResult[i] === "D") {
      cnt.push(score ** 2);
    } else if (dartResult[i] === "T") {
      cnt.push(score ** 3);
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * -1;
    }
  }
  return cnt.reduce((a, b) => a + b, 0);
}
console.log(solution(dartResult));
