// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// let N = parseInt(input[0]);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input);
for (i = 0; i < input.length; i++) {
  let N = Number(input[i]);
  let five = 0;
  let three = 0;

  while (true) {
    if (N % 5 === 0) {
      five = N / 5;
      console.log(five + three);
      break;
    }
    if (N < 0) {
      console.log(-1);
      break;
    }
    N = N - 3;
    three++;
  }
}
// 1. 가장 먼저 5의 배수인지 확인한다.
// 2. 5의 배수가 아닐 경우 3을 뺀다.
// 3. 3을 뺀 값이 5의 배수인지 확인한다.
// 4. 5의 배수가 아닐 경우 3을 다시 또 뺀다.
// 5. 뺀 값이 5의 배수가 될때까지 반복한다.
