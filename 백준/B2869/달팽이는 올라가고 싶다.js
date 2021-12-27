const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const data = input[i].split(" ");
  const goUp = +data[0];
  const goDown = +data[1];
  const D = +data[2];

  let dayMove = goUp - goDown;
  let totalMove = D - goDown;
  let Move = Math.ceil(totalMove / dayMove);

  console.log(Move);
}
