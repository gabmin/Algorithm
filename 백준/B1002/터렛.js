const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let index = +input[0] + 1;
for (i = 1; i < index; i++) {
  const newInput = input[i].split(" ");

  let X1 = +newInput[0];
  let Y1 = +newInput[1];
  let R1 = +newInput[2];
  let X2 = +newInput[3];
  let Y2 = +newInput[4];
  let R2 = +newInput[5];

  let dx = X1 - X2;
  let dy = Y1 - Y2;
  let D = Math.sqrt(dx * dx + dy * dy);

  let sumR = R1 + R2;
  let subR = Math.abs(R1 - R2);

  if (subR < D && D < sumR) {
    console.log("2");
  } else if (sumR === D || (subR === D && D !== 0)) {
    console.log("1");
  } else if (sumR < D || subR > D) {
    console.log("0");
  } else if (D === 0 && R1 === R2) {
    console.log("-1");
  } else if (D === 0) {
    console.log("0");
  }
}

// https://mathbang.net/101  참고!!
