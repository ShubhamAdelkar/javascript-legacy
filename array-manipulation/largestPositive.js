function largest(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  }, 1);
}

console.log(largest([1, 2, 3, 4, 5, 6, 7, 8]));
