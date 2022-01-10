let n = 123;

function solution(n) {
  let answer = 0;
  n.toString()
    .split("")
    .map((e) => (answer += +e));
  return answer;
}

function solution(n) {
  // 숫자 + "" = 문자
  // 문자 + ...(스프레드문법) = 배열(=split)
  // 문자 * 1 = 숫자

  return [...(n + "")].reduce((acc, curr) => acc + curr * 1, 0);
}
console.log(solution(n));
