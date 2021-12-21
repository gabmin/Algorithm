const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(participant, completion));

// 각 배열을 정렬해서 하나씩 검사하여 다른 이름이 나오면 그 값을 반환한다.
