const numbers = [1, -2, -30, 4, 6, -8, -9, -10, 12, 11, -13, -22, 20];

const sum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);
