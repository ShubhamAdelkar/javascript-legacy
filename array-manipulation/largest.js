// finding largest value using reduce.
function largest(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  });
}

console.log(largest([1, 2, 3, 4, 5, 6, 7, 8]));

export default largest;
