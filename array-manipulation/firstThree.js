// flitering by index
function firstThree(array) {
  const firstThreeArray = array.filter((el, i) => i < 3);

  return firstThreeArray;
}

console.log(firstThree(["a", "b", "c", "e"]));

export default firstThree;
