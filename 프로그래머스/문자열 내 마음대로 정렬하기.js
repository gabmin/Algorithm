let strings = ["abce", "abcd", "cdx"];
let n = 2;

function solution(strings, n) {
  let answer = [];
  for (let i = 0; i < strings.length; i++) {
    answer.push([strings[i][n], strings[i]]);
  }
  return answer.sort().map((e) => e[1]);
}

console.log(solution(strings, n));

// 다른 사람 풀이 방법
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
