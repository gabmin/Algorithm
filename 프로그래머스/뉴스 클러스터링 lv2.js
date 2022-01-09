let str1 = "aa1+aa2";
let str2 = "AAAA12";

function solution(str1, str2) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    arr1.push(str1.substr(i, 2).toUpperCase());
    arr2.push(str2.substr(i, 2).toUpperCase());
  }
  let result1 = arr1.filter((e) => e.match(/[a-z][a-z]/gi));
  let result2 = arr2.filter((e) => e.match(/[a-z][a-z]/gi));

  let sum =
    [...new Set([...result1, ...result2])].length === 1
      ? result1.length >= result2.length
        ? result1.length
        : result2.length
      : [...new Set([...result1, ...result2])].length;
  let sub = [];

  for (let i = 0; i < result1.length; i++) {
    if (result1[i] === result2[i]) {
      sub.push(result1[i]);
    }
  }

  let jacard = sub.length === 0 ? 1 : sub.length / sum;

  return Math.floor(jacard * 65536);
}

console.log(solution(str1, str2));

//다른 사람 풀이 방법

function solution(str1, str2) {
  //
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
