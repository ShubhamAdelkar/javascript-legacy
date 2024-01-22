function allUnique(numbers) {
  return numbers.reduce((accumulator, currentValue, index) => {
    if (!accumulator) return false;
    return numbers.indexOf(currentValue) === index;
  }, true);
}

console.log(allUnique([1,2,3,4,5,6,7,8]));

module.exports = allUnique;
