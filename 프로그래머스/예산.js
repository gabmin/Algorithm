let d = [1, 3, 2, 5, 4];
let budget = 9;

function solution(d, budget) {
  let new_arr = d.sort((a, b) => a - b);
  let count = 0;
  let result = 0;

  for (let i = 0; i < new_arr.length; i++) {
    if (count <= budget) {
      count = count + new_arr[i];
      if (count > budget) {
        break;
      }
      result++;
    }
  }

  return result;
}

console.log(solution(d, budget));

// 다른 사람 풀이 방법
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
