function sumTogether(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

console.log(sumTogether([2, 3, 4, 5], [3, 5, 7, 54]));

export default sumTogether;