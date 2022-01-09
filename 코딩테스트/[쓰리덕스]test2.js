let numbers = [10, 40, 30, 20];
let K = 20;

function solution(numbers, K) {
  let arr = permutation(numbers, numbers.length);
  let filterd_arr = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let state = [];
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (Math.abs(arr[i][j] - arr[i][j + 1] > K)) {
        state.push(false);
      } else {
        state.push(true);
      }
    }

    if (state.every((e) => e === true)) {
      filterd_arr.push(arr[i]);
    }
  }
  for (let i = 0; i < filterd_arr.length; i++) {
    let cnt = 0;
    for (let j = 0; j < filterd_arr[i].length; j++) {
      if (filterd_arr[i][j] !== numbers[j]) {
        cnt++;
      }
    }
    answer.push(cnt / 2);
  }
  return Math.min(answer);
}

function permutation(numbers, num) {
  let result = [];
  if (num == 1) return numbers.map((e) => [e]);

  numbers.forEach((e, i, array) => {
    let rest = [...array.slice(0, i), ...array.slice(i + 1)];
    let permutations = permutation(rest, num - 1);
    let Arr = permutations.map((x) => [e, ...x]);
    result.push(...Arr);
  });
  return result;
}

console.log(solution(numbers, K));
