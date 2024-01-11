function removeOccurrences(array, num) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === num) {
      array.splice(i, 1);
    }
  }
  return array;
}

const result = removeOccurrences([1, 2, 3, 5, 6, 1], 1);
console.log(result);
