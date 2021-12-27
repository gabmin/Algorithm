let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  let fail_rate = [];
  let people = stages.length; // 인원 총 수
  for (let i = 1; i < N + 2; i++) {
    let final_states = stages.filter((n) => n === i).length; // 각 스테이지 도달한 사람의 수 구하기
    fail_rate.push([i, final_states / people]); // 인덱스 번호와 실패율
    people -= final_states; // 총 인원수 에서 해당 스테이지 인원수 만큼 빼주기
  }
  fail_rate.pop(); // 모든 스테이지를 클리어한 마지막 값 제거
  fail_rate.sort((a, b) => b[1] - a[1]); // 오름차순 정렬

  return fail_rate.map((n) => n[0]); //각 배열의 인덱스 값만 나타내기
}

console.log(solution(N, stages));

// 다른 사람 풀이 방법
// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }
