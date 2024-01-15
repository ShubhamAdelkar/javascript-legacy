function fizzBuzz(numbers) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result += "fizzbuzz";
    } else if (numbers[i] % 3 === 0) {
      result += "fizz";
    } else if (numbers[i] % 5 === 0) {
      result += "buzz";
    }
  }
  return result;
}

console.log(fizzBuzz([1, 3, 5, 7, 8, 8, 8, 9, 8]));
