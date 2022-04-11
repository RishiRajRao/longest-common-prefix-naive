function commonPrefix(arr) {
  let maxlen = Number.POSITIVE_INFINITY,
    temp = "",
    idx = -1,
    final = "";
  if (arr.length === 0) return;
  for (let val of arr) {
    if (val.length <= maxlen) {
      maxlen = val.length;
      temp = val;
    }
  }

  for (let i = 0; i < temp.length; i++) {
    let common = arr.every((ele) => ele[i] === temp[i]);
    if (common) {
      idx = i;
    } else {
      break;
    }
  }
  if (idx === -1) {
    console.log("neg", -1);
    return -1;
  }
  for (let i = 0; i <= idx; i++) {
    final += temp[i];
  }
  return final;
}

commonPrefix(["a", "b", "c", "d"]);
