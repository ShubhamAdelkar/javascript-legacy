function sortStringsDown(array) {
  array.sort(function (a, b) {
    return b.localeCompare(a);
  });
  return array;
}

console.log(sortStringsDown(["a", "b", "c", "d"]));
module.exports = sortStringsDown;
