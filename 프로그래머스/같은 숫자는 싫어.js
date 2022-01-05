let arr = [4, 4, 4, 3, 3];

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue;
    else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution(arr));

//다른 사람 풀이 방법
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
