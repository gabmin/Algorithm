let n = 125;

function solution(n) {
  let reverse = n.toString(3).split("").reverse().join("");
  let answer = parseInt(reverse, 3);

  return answer;
}

console.log(solution(n));
