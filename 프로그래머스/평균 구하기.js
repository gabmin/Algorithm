let arr = [1, 2, 3, 4];

function solution(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
}

console.log(soltuon(arr));
