let left = 13;
let right = 17;

function solution(left, right) {
  let answer = 0;

  for (let i = left; i < right + 1; i++) {
    // left ~ right 반복문;
    let number = 0;
    for (let j = 1; j < i + 1; j++) {
      // 1 ~ 해당 숫자 반복문
      i % j === 0 ? number++ : null; // 1 ~ 해당 숫자 까지 나눈 나머지가 0이면 약수이다. 약수일 경우 number +1
    }
    number % 2 === 0 ? (answer += i) : (answer -= i); // 구한 약수의 계수가 홀수, 짝수 인지에 따라 해당 숫자를 더하고 빼준다.
  }
  return answer;
}

console.log(solution(left, right));

// 다른 사람 풀이 방법
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // isInteger는 해당 숫자가 정수인지 판별한다. sqrt는 제곱근
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
