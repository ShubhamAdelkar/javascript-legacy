function sortStringsUp(array) {
  array.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return array;
}

module.exports = sortStringsUp;

console.log(sortStringsUp(["apple", "orange", "banana", "guava", "cashew"]));
