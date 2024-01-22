function startsWithX(string) {
let str = string.charAt(0);
  if (str == "x") {
    return true;
  } else if (typeof string !== "string") {
    return "not a string";
  } else {
    return false;
  }
}

const result = startsWithX('xxx');
console.log(result);

