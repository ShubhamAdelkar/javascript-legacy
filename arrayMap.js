function plusOne(arr) {
  const result = arr.map(function (x) {
    return x + 1;
  });
  return result;
}

console.log(plusOne([1, 2, 3, 4, 5]));
