let s = "qwer";

function solution(s) {
  let new_s = s.split("");
  let leng = new_s.length;
  for (let i = 0; i < leng; i++) {
    if (new_s.length <= 2) {
      return new_s.join("");
    }
    new_s.shift();
    new_s.pop();
  }
}

console.log(solution(s));

// 다른 사람 풀이 방법
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
//str.substr(start[, length]) start부터 일정 길이 만큼 문자열 자르는 함수
