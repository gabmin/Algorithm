let numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  const all_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // numbers와 all_num 중복되지 않은 값 필터링
  const result = all_num.filter((num) => !numbers.includes(num));
  // 중복되지 않은 값 더하기
  const answer = result.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return answer;
}

console.log(solution(numbers));

//다른 사람 풀이 방법
// function solution(numbers) {
//     return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
// }
