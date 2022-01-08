let s = "pPoooyY";

function solution(s) {
  let p = 0;
  let y = 0;
  let answer = s.replace(/[^pPyY]/g, "").toLowerCase();
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "p") {
      p++;
    } else {
      y++;
    }
  }
  return p === y ? true : false;
}

console.log(solution(s));

//다른 사람 풀이 방법 1

function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

//다른 사람 풀이 방법 2
// match는 문자열이 정규식과 매치되는 부분을 검색한다.

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
