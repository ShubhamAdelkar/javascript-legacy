function shortStrings(array) {
  const string = array.filter((el) => el.length <= 3);
  return string;
}

console.log(shortStrings(["abc", "a", "apples", "television"]));

export default shortStrings;
