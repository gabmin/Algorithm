let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

//다른 사람 풀이 방법
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution(progresses, speeds));
