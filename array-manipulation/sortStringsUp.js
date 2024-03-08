function sortStringsUp(array) {
  array.sort((a, b) => a.localeCompare(b));
  return array;
}

console.log(sortStringsUp(["apple", "orange", "banana", "guava", "cashew"]));

export default sortStringsUp;
