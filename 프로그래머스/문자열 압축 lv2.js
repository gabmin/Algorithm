let s = "aabbaccc";

function solution(s) {
  let answer = [];
  let len = Math.ceil(s.length / 2); //먼저 문자열을 나눌 개수를 구한다. (최대 계수 총 길이의 절반)
  for (let i = 1; i < len + 1; i++) {
    let count = 1; // 연속된 문자열의 개수
    let str = ""; // 새로 만들 문자
    for (let j = 0; j < s.length; j += i) {
      let first = s.substring(j, j + i); //비교할 첫번째 문자
      let second = s.substring(j + i, j + i * 2); //비교할 두번째 문자

      if (first === second) {
        count++; //비교 결과 반복되면 +1
      } else {
        if (count === 1) {
          //반복되지 않을경우 숫자 없이 문자만 입력
          str = str + first;
        } else {
          //반복되다가 반복되지 않을때 반복한 만큼의 숫자와 문자 입력
          str = str + count + first;
          count = 1; // 연속된 숫자 초기화
        }
      }
    }
    answer.push(str.length); // 변환된 문자들의 길이
  }
  return Math.min.apply(Math, answer); // 길이들중 최소값 반환
}

console.log(solution(s));
