const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
const answer = [];

for (let i = 0; i < input.length; i++) {
  let result = 0;
  for (let j = 0; j < input[i].length; j++) {
    switch (input[i][j]) {
      case "(":
        result = result + 1;
        break;
      case ")":
        result = result - 1;
        break;
    }
    if (result < -1) {
      break;
    }
  }
  answer.push(result === 0 ? "YES" : "NO");
}
console.log(answer.join("\n"));
