const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();

const arr = [];

for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "0":
      arr.pop();
      break;

    default:
      arr.push(+input[i]);
      break;
  }
}

const result = arr.reduce(function add(a, b) {
  return a + b;
}, 0);
console.log(result);
