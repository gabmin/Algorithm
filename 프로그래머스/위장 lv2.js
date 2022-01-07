let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  let type = [];
  clothes.map((e) => type.push(e[1]));
  let types = new Set(type);
  let answer = new Array([...types].length).fill(1);

  for (let i = 0; i < clothes.length; i++) {
    for (let j = 0; j < [...types].length; j++) {
      if ([...types][j] === clothes[i][1]) {
        answer[j] = answer[j] + 1;
      }
    }
  }

  return answer.reduce((a, b) => a * b) - 1;
}

// 다른 사람 풀이 방법
function solution(clothes) {
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    console.log(obj);
  }

  for (var key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}

console.log(solution(clothes));
