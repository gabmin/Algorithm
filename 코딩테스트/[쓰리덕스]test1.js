let location = [
  [0, 3],
  [1, 1],
  [1, 5],
  [2, 2],
  [3, 3],
  [4, 0],
];
let s = [3, 4];
let e = [0, 0];

function solution(location, s, e) {
  let arr = [];
  let answer = 0;
  const xs = s[0];
  const ys = s[1];
  const xe = e[0];
  const ye = e[1];

  let Xstart = xs > xe ? xe : xs;
  let Xend = Xstart === xs ? xe : xs;
  let Ystart = ys > ye ? ye : ys;
  let Yend = Ystart === ys ? ye : ys;

  for (let i = Xstart; i <= Xend; i++) {
    for (let j = Ystart; j <= Yend; j++) {
      arr.push([i, j]);
    }
  }

  for (let i = 0; i < location.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      location[i].toString() === arr[j].toString() ? answer++ : null;
    }
  }

  return answer;
}

console.log(solution(location, s, e));
