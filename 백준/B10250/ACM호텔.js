const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let index = +input[0] + 1;
for (i = 1; i < index; i++) {
  const newInput = input[i].split(" ");
  let H = +newInput[0];
  let W = +newInput[1];
  let N = +newInput[2];

  let lastNum = Math.ceil(N / H);
  if (lastNum < 10) {
    lastNum = "0" + lastNum;
  }
  let FirstNum = N % H;
  if (N % H === 0) {
    FirstNum = H;
  }
  let RoomNum = String(FirstNum) + String(lastNum);
  console.log(RoomNum);
}

// N을 H로 나눈 값의 올림 수를 뒷 2자리
// N을 H로 나눈 값의 나머지 값을 앞 2자리 ( 나머지가 0일 경우 H가 앞 2자리에 해당 )
// 구한 값을 문자열로 변환하여 합쳐서 방번호를 지정한다.
