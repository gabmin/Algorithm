let ball = [11, 2, 9, 13, 24];
let order = [9, 2, 13, 24, 11];

function solution(ball, order) {
  let answer = [];
  for (let i = 0; i < order.length; i++) {
    let f = ball[0];
    let b = ball[ball.length - 1];
    if (f === order[i]) {
      answer.push(order[i]);
      ball.shift();
    } else if (b === order[i]) {
      answer.push(order[i]);
      ball.pop();
    } else {
      continue;
    }
    i = -1;
  }

  return answer;
}

console.log(solution(ball, order));

ball = [1, 2, 3, 4, 5];
answer = [6];
