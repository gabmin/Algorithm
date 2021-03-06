let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// 다른 사람 풀이 방법
function solution(record) {
  let answer = [];
  const map = {};
  for (let i = 0; i < record.length; ++i) {
    const [state, uid, name] = record[i].split(" ");
    if (state == "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state == "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    map[uid] = name;
  }
  return answer;
}

console.log(solution(record));

// .map((ele) => map[ele[0]] + ele[1])
