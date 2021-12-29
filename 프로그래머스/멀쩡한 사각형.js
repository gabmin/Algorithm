let w = 8;
let h = 12;

function gcd(w, h) {
  let cul = w % h;

  if (cul === 0) {
    return h;
  }

  return gcd(h, cul);
}

function solution(w, h) {
  let culgcd = gcd(w, h);

  let answer = w * h - (w + h - culgcd);

  return answer;
}

console.log(solution(w, h));

// 대각선에 겹치는 공식 : w + h - 최대공약수
// 최대공약수는 유클리드 호제법을 통해 구할 수 있다.
// 5 % 3 = 2
// 3 % 2 = 1
// 2 % 1 = 0
// 최대공약수 = 1
