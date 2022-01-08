let birth = [
  "1899-13-31",
  "19001231",
  "2001-09-04",
  "1900-02-29",
  "2021-5-31",
  "1950-11-30",
  "1996-02-29",
  "1999-11-31",
  "2000-02-29",
];

function solution(birth) {
  const day31 = ["01", "03", "05", "07", "08", "10", "12"];
  const day30 = ["04", "06", "09", "11"];
  let form_check = birth.filter((e) => e.split("-").length === 3);
  let year_check = form_check.filter(
    (e) =>
      1900 <= parseInt(e.split("-")[0]) && 2021 >= parseInt(e.split("-")[0])
  );

  let month_check = year_check.filter((e) =>
    e.split("-")[1].match(/(0[1-9]|1[012])/)
  );

  let day_check = month_check.filter((e) => {
    let year = e.split("-")[0];
    let month = e.split("-")[1];
    let day = e.split("-")[2];
    if (day31.includes(month)) {
      if (day.match(/(0[1-9]|[12][0-9]|3[01])$/)) {
        return true;
      }
    } else if (day30.includes(month)) {
      if (day.match(/(0[1-9]|[12][0-9]|3[0])$/)) {
        return true;
      }
    } else {
      if (
        parseInt(year) % 400 === 0 ||
        (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0)
      ) {
        if (day.match(/(0[1-9]|[12][0-9]|2[0-9])$/)) {
          return true;
        }
      } else {
        if (day.match(/(0[1-9]|[12][0-9]|2[0-8])$/)) {
          return true;
        }
      }
    }
  });

  return day_check;
}

console.log(solution(birth));
