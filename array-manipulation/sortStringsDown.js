function sortStringsDown(array) {
  array.sort((a, b) => b.localeCompare(a));
  return array;
}

console.log(sortStringsDown(["a", "b", "c", "d"]));
export default sortStringsDown;
