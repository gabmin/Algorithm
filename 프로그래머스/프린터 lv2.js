let priorities = [1, 1, 1, 1, 5, 1, 1];
let location = 5;

function solution(priorities, location) {
  let cnt = 0;
  while (true) {
    let max = Math.max(...priorities);
    let e = priorities.shift();
    if (e === max) {
      cnt++;
      if (location === 0) {
        return cnt;
      }
    } else {
      priorities.push(e);
    }
    location--;
    if (location < 0) {
      location = priorities.length - 1;
    }
  }
}
console.log(solution(priorities, location));
// 다른 사람 풀이 방법

function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      // 함수의 조건에 맞는 요소가 하나라도 있으면 true반환
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
    console.log(count);
  }
}
