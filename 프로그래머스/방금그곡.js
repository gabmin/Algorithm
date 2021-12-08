function solution(m, musicinfos) {
  const music1 = musicinfos[0].split(",");
  const music2 = musicinfos[1].split(",");

  const time1A = music1[0].split(":");
  const time1B = music1[1].split(":");

  const time2A = music2[0].split(":");
  const time2B = music2[1].split(":");

  const totalTime1 = (+time1B[0] - +time1A[0]) * 60 + (+time1B[1] - time1A[1]);
  const totalTime2 = (+time2B[0] - +time2A[0]) * 60 + (+time2B[1] - time2A[1]);

  const code1 = music1[3]
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/A#/gi, "a")
    .replace(/G#/gi, "g")
    .split("", totalTime1);
  const code2 = music2[3]
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/A#/gi, "a")
    .replace(/G#/gi, "g")
    .split("", totalTime2);
  const target = m
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/A#/gi, "a")
    .replace(/G#/gi, "g")
    .split("");

  let notSame1 = target
    .concat(code1)
    .filter((word) => !target.includes(word) || !code1.includes(word));
  let notSame2 = target
    .concat(code2)
    .filter((word) => !target.includes(word) || !code2.includes(word));

  if (notSame1.length > notSame2.length) {
    return music2[2];
  }
  if (notSame1.length < notSame2.length) {
    return music1[2];
  }
  if ((notSame1.length = notSame2.length)) {
    if (totalTime1 > totalTime2) {
      return music1[2];
    } else {
      return music2[2];
    }
  }
  if (notSame1.length > 0 && notSame2.length > 0) {
    return "(none)";
  }
}
