function shortStrings(array) {
  const string = array.filter(function (el) {
    return el.length <= 3;
  });
  return string;
}

console.log(shortStrings(["abc", "a", "apples", "television"]));

module.exports = shortStrings;
