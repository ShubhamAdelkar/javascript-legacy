function looseEquals(a, b) {
  if (a === b || a == b) {
    return true;
  } else {
    return false;
  }
}

console.log(looseEquals("1", 1));
