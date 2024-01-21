function squared(n) {
  return n ** 2;
}
const square = [2].map(squared);
console.log(square);

module.exports = squared;