const lottos = [1, 2, 3, 4, 5, 6];
const win_nums = [7, 8, 9, 10, 11, 12];

function solution(lottos, win_nums) {
  // 로또에 지워진 번호 '0'을 제외한 배열
  let filtered = lottos.filter((num) => num !== 0);
  // 로또에 지워진 번호 '0'의 개수
  let zero_num = lottos.filter((num) => num === 0).length;
  // 중복된 숫자를 제외하고 lottos와 win_nums를 합친 배열
  let final = filtered
    .concat(win_nums)
    .filter((num) => !filtered.includes(num) || !win_nums.includes(num));
  // '0'을 제외한 lottos 배열을 개수 + win_nums 배열의 개수 - 중복된 숫자 제외하고 합친 배열의 수 = 중복된 숫자의 갯수 * 2
  let cur_num = (filtered.length + win_nums.length - final.length) / 2;
  // 7 - 당첨된 숫자 갯수 => 6개 당첨시 1등, 3개 당첨시 4등
  let answer = [
    7 - (cur_num + zero_num === 0 ? 1 : cur_num + zero_num),
    7 - (cur_num === 0 ? 1 : cur_num),
  ];
  return answer;
}

console.log(solution(lottos, win_nums));

// 다른 사람 풀이 방법
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];

//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;

//     const maxCount = minCount + zeroCount;

//     return [rank[maxCount], rank[minCount]];
// }
