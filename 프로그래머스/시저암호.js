let s = "z";
let n = 1;

function solution(s, n) {
  const ABC = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const abc = ABC.map((e) => e.toLowerCase());
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (ABC.includes(s[i])) {
      let index1 = Number(ABC.indexOf(s[i])) + n;
      answer = answer + ABC[index1 >= 26 ? index1 - 26 : index1];
    } else if (abc.includes(s[i])) {
      let index2 = Number(abc.indexOf(s[i])) + n;
      answer = answer + abc[index2 >= 26 ? index2 - 26 : index2];
    } else {
      answer = answer + " ";
    }
  }
  return answer;
}

console.log(solution(s, n));

// 다른 사람 풀이 방법
function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
