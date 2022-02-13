let n = 5;
let m = 3;

function solution(n, m) {
  console.log(n, m);
  const low = "*".repeat(n);
  const answer = (low + "\n").repeat(m - 1);

  return answer + low;
}

console.log(solution(n, m));

//풀이 방법
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const low = "*".repeat(a);
  const answer = (low + "\n").repeat(b - 1);

  console.log(answer + low);
});
