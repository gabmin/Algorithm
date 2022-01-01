let s = "ccdd";

// 스택 자료구조를 활요하여 해결한다.
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer[answer.length - 1] !== s[i]) {
      answer.push(s[i]);
    } else {
      answer.pop();
    }
  }
  return answer.length > 0 ? 0 : 1;
}

console.log("정답", solution(s));
