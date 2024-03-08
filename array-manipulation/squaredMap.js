import squared from "./square.js";

function squaredMap(arr) {
  const square = arr.map(squared);
  return square;
}

console.log(squaredMap([2, 5, 7, 9, 88]));

export default squaredMap;
