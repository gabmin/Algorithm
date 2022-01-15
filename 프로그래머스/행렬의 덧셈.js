let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  let answer = [];
  let cnt = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      cnt.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(cnt);
    cnt = [];
  }
  return answer;
}

// 다른 사람 풀이 방법

function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

console.log(solution(arr1, arr2));
