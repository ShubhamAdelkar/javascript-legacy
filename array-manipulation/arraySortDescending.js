// array sort in descending order
function sortDown(array) {
  array.sort((a, b) => b - a);
  return array;
}

sortDown([1, 4, 5, 3, 2]); // [5,4,3,2,1]

export default sortDown;
