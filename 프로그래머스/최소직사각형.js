let sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  let new_sizes = sizes.map((n) => n.sort((a, b) => b - a));
  let w = [];
  let h = [];
  for (let i = 0; i < new_sizes.length; i++) {
    w.push(new_sizes[i][0]);
    h.push(new_sizes[i][1]);
  }
  w.sort((a, b) => b - a);
  h.sort((a, b) => b - a);

  return w[0] * h[0];
}

console.log(solution(sizes));

// 다른 사람 풀이 방법
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
