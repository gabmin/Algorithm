let seoul = ["Jane", "Kim"];

function solution(seoul) {
  let answer = seoul.findIndex((e) => e === "Kim");
  return `김서방은 ${answer}에 있다`;
}

console.log(solution(seoul));

//다른 사람 풀이 방법
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}
