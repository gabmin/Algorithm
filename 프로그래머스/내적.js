const a = [-1, 0, 1];
const b = [1, 0, -1];

function solution(a, b) {
  const answer = a.reduce((acc, cur, index) => {
    return acc + cur * b[index];
  }, 0);

  return answer;
}

console.log(solution(a, b));

// 다른 사람 풀이 방법
// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
