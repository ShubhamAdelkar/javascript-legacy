function removeDuplicates(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    [] /* Initial value is an empty array */
  );
}

console.log(removeDuplicates([2, 3, 2, 4, 5, 7, 1, 1, 4, 2, 5, 6, 7, 9]));

export default removeDuplicates;
