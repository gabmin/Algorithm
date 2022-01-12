let n = 121;

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  } else {
    return -1;
  }
}

console.log(solution(n));
