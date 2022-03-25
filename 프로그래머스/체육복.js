let n = 7;
let lost = [1, 2, 3];
let reserve = [2, 3, 4];

function solution(n, lost, reserve) {
  // lost와 reserve 의 중복된 값을 제거한다.
  let new_lost = lost.filter((num) => !reserve.includes(num));
  let new_reserve = reserve.filter((num) => !lost.includes(num));

  // 일어버린 번호의 양쪽 번호에 대한 새로운 배열을 만든다.
  let a = new_lost.map((num) => num + 1);
  let b = new_lost.map((num) => num - 1);
  let c = new Set(a.concat(b)); // 중복된 숫자 제거

  let new_array = [...c].filter((num) => num !== 0).filter((num) => num <= n); // 0인 숫자와 n보다 큰 수 제거

  // 새로운 배열과 reserve와 같은 숫자를 찾는다.
  let same_array = new_reserve.filter((num) => new_array.includes(num));

  // 총 사람 수(n) 에서 잃어버린 사람 수(new_lost.length)를 빼고 여별이 있는 사람 수를 더해준다.
  let answer =
    n -
    new_lost.length +
    (same_array.length >= new_lost.length
      ? new_lost.length
      : same_array.length);

  return answer;
}

console.log(solution(n, lost, reserve));

// 다른 사람 풀이 방법
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}
