const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  let inputs = Number(input[i]);

  let input2 = inputs * 2;

  let isPrimeNumber = Array(input2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  function PrimeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
      if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= input2) {
          isPrimeNumber[i * m] = false;
          m++;
        }
      }
    }
    let results = [];

    for (let i = inputs + 1; i <= input2; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNumber();
}
