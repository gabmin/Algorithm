let numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
  let answer = numbers
    .map((e) => String(e))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution(numbers));

//sort((a, b) => b + a - (a + b))
//만약 배열이 [3,30,34]라면
//a = 3, b = 30, 303 - 330가 음수가 나오므로 순서가 바뀌지 않는다.
//a = 30, b = 34, 3430 - 3034가 양수가 나오므로 순수가 바뀐다.
