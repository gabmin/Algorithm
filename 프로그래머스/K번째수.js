let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let new_array = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort(function (a, b) {
        return a - b;
      });
    answer.push(new_array[commands[i][2] - 1]);
  }

  return answer;
}

console.log(solution(array, commands));

//다른 사람 풀이 방법
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)

//         return newArray[position - 1]
//     })
// }
