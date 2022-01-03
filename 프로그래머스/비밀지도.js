let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  let new_arr1 = [];
  let new_arr2 = [];
  let answer = [];
  for (let i = 0; i < n; i++) {
    new_arr1.push(arr1[i].toString(2));
    new_arr2.push(arr2[i].toString(2));
  }
  for (let j = 0; j < n; j++) {
    answer.push(
      String(+new_arr1[j] + +new_arr2[j])
        .padStart(n, "0")
        .replace(/2/g, "1")
        .replace(/1/g, "#")
        .replace(/0/g, " ")
    );
  }

  return answer;
}

console.log(solution(n, arr1, arr2));

// 다른 사람 풀이 방법

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

// 다른 사람 풀이 방법

function solution(n, arr1, arr2) {
  let answer = arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
  return answer;
}
