// flitering by index
function firstThree(array) {
  const firstThreeArray = array.filter(function (el, i) {
    return i < 3;
  });

  return firstThreeArray;
}

console.log(firstThree(["a", "b", "c", "e"]));

module.exports = firstThree;
