let answer = "01033334444";

function solution(phone_number) {
  let star = phone_number.slice(0, phone_number.length - 4);
  let rest = phone_number.slice(phone_number.length - 4, phone_number.length);

  return star.replace(/[0-9]/g, "*") + rest;
}

//다른 사람 풀이 방법

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

console.log(solution(phone_number));
