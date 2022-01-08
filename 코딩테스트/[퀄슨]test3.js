let num = 5;
let mark = [1, 2, 3, 1];

function solution(num, mark) {
  let answer = 0;
  for (let i = 0, j = 0; i < num; i++) {
    answer = mark[j];
    j = answer;
  }
  return answer;
}

console.log(solution(num, mark));
