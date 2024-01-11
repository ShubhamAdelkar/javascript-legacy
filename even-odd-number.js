function checkNumber(num) {
  if (num < 0) {
    return "negative";
  } else if (num === 0) {
    return "zero";
  } else if (typeof num !== "number") {
    return "Not a number";
  } else {
    return "positive";
  }
}

const result = checkNumber(0);
console.log(result);
