let n = 125;

function solution(n) {
  let reverse = n.toString(3).split("").reverse().join("");

  return parseInt(reverse, 3);
}

console.log(solution(n));
