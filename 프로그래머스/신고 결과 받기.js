let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

function solution(id_list, report, k) {
  let report_cnt = {};
  let danger = [];
  let reports = report.map((e) => e.split(" "));
  // 신고당한 횟수 구하기
  reports.forEach((x) => {
    report_cnt[x[1]] = (report_cnt[x[1]] || 0) + 1;
  });
  // k번 이상 신고당한 유저 ID 구하기
  for (cnt in report_cnt) {
    if (report_cnt[cnt] >= k) {
      danger.push(cnt);
    }
  }
  let answer = [[], [], [], []];
  id_list.map((id, i) =>
    reports.map((e) => {
      if (id === e[0]) {
        answer[i].push(e[1]);
      }
    })
  );

  return answer;
}

console.log(solution(id_list, report, k));
