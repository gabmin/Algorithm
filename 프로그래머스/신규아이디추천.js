const new_id = "abcdefghijklmn.p";

function solution(new_id) {
  let edit_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{1,}/g, ".")
    .replace(/^\./g, "")
    .replace(/\.$/g, "")
    .substring(0, 15)
    .replace(/^\./g, "")
    .replace(/\.$/g, "");

  if (edit_id === "") {
    edit_id = "a";
  }
  function edit(edit_id) {
    if (edit_id.length > 2) {
      return edit_id;
    }
    return edit(edit_id.concat(edit_id.charAt(edit_id.length - 1)));
  }
  let answer = edit(edit_id);
  answer;
  return answer;
}

console.log(solution(new_id));
