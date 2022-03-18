let answers = [1, 3, 2, 4, 2];

function solution(answers) {
  let answer = [];
  let _1 = [1, 2, 3, 4, 5];
  let _2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let _3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (_1[i % 5] === answers[i]) {
      result[0]++;
    }
    if (_2[i % 8] === answers[i]) {
      result[1]++;
    }
    if (_3[i % 10] === answers[i]) {
      result[2]++;
    }
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j] === Math.max(...result)) {
      answer.push(j + 1);
    }
  }

  return answer;
}

console.log(solution(answers));

//다른 사람 풀이 방법
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
