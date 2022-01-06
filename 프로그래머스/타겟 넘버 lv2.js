let numbers = [1, 1, 1, 1, 1];
let target = 3;

function solution(numbers, target) {
  let answer = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);

  return answer;
}
console.log(solution(numbers, target));

//DFS를 통해 구현
//모든 경우의 수를 구할 때 사용
