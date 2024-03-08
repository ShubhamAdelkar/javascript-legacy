function halfValue(numbers) {
  let newarray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      newarray.push(numbers[i] / 2);
    } else {
      newarray.push(Math.ceil(numbers[i] / 2));
    }
  }
  return newarray;
}

const res = halfValue([3, 4, 3, 2, 3, 45, 56, 6, 54, 7]);
console.log(res)
export default halfValue;