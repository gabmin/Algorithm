let absolutes = [1, 2, 3];
let signs = [false, false, true];

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, index) => {
    return signs[index] ? acc + cur : acc - cur;
  }, 0);

  return answer;
}

console.log(solution(absolutes, signs));

// 다른 사람 풀이 방법
// function solution(absolutes, signs) {

//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
