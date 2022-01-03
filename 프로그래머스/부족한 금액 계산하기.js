let price = 3;
let money = 20;
let count = 4;

function solution(price, money, count) {
  let total_price = 0;
  for (let i = 1; i <= count; i++) {
    total_price = total_price + price * i;
  }

  return total_price - money < 0 ? 0 : total_price - money;
}
console.log(solution(price, money, count));

// 다른 사람 풀이 방법
function solution(price, money, count) {
  // 가우스 공식을 활용
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
