function sum(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; 
  });
}

console.log(sum([1, 2, 3, 4, 5]));
export default sum;
