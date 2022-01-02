let numbers = [5, 0, 2, 7];

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let result = [...new Set(answer)];
  return result.sort((a, b) => a - b);
}

console.log(solution(numbers));
