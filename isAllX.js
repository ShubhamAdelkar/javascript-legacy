function isAllX(string) {
  const str = string;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "x" && str[i] !== "X") {
      return false;
    }
  }
  return true;
}

const result = isAllX("X");
console.log(result);
