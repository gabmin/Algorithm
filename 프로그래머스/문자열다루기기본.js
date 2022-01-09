let s = "1234";

function solution(s) {
  return s.length === 4 || s.length === 6 ? !/\D/g.test(s) : false;
}

console.log(solution(s));

//다른 사람 풀이 방법 1
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

//다른 사람 풀이 방법 2
function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
