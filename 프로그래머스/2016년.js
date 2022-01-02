let a = 5;
let b = 24;

function solution(a, b) {
  const weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const Months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = b;
  for (let i = 0; i < a - 1; i++) {
    days = days + Months[i];
  }

  let answer = weeks[days % 7];
  return answer;
}

console.log(solution(a, b));

// 다른 사람 풀이 방법
function getDayName(a, b) {
  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016-${a}-${b}`);
  // console.log(date); 2016-05-23T15:00:00.000Z
  var day = date.getDay();
  // console.log(day); 2
  // 숫자는 요일을 나타낸다. 0~6 0은 일요일을 나타낸다.
  return arr[day];
}

console.log(getDayName(a, b));
