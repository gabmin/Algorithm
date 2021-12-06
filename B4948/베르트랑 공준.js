const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// for (i = 0; i < input.length; i++) {
//   N = input[i];

//   A = N - 1;
//   B = 0;
//   while (A <= 2 * N - 1) {
//     if (A % 2 !== 0 && A % 3 !== 0 && A % 5 !== 0 && A % 7 !== 0) {
//       B = B + 1;
//     }
//     A++;
//   }
//   console.log(B);
// }

let N = 100;
A = N;
B = 0;
while (A <= 2 * N - 1) {
  if (A === 0) {
    break;
  }
  if (A % 2 !== 0 && A % 3 !== 0 && A % 5 !== 0 && A % 7 !== 0) {
    B = B + 1;
  }
  A++;
}
console.log(B);
