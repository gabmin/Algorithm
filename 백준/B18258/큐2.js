const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
const arr = [];
const response = [];
for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "pop": //마지막 수를 제거하고 그 수의 값을 출력하고 없을 경우 -1을 출력
      response.push(arr.length === 0 ? -1 : +arr.shift());
      break;

    case "size": //총 수의 개수를 출력
      response.push(arr.length);
      break;

    case "empty": // 수가 없을 경우 1을 출력하고 아닐경우 0을 출력
      response.push(arr.length === 0 ? 1 : 0);
      break;

    case "front": // 첫번째 수의 값을 출력하고 수가 없을 경우 -1출력
      response.push(arr.length === 0 ? -1 : +arr[0]);
      break;

    case "back": // 마지막 수의 값을 출력하고 수가 없을 경우 -1출력
      response.push(arr.length === 0 ? -1 : +arr[arr.length - 1]);
      break;

    default:
      //push는 '명령어 + 수'로 들어오기 때문에 Case가 아닌 방법으로 사용함.
      arr.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(response.join("\n"));
