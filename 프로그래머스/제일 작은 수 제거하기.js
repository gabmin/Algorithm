let arr = [4, 3, 2, 1];

function solution(arr) {
  let min = Math.min(...arr);
  let answer = arr.filter((e) => e > min);

  return answer.length <= 1 ? [-1] : answer;
}

console.log(solution(arr));
