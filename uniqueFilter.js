function unique(array) {
  const uniqueValues = array.filter(function (el, i) {
    return array.indexOf(el) === i;
  });
  return uniqueValues;
}

console.log(unique(["a", "b", "c", "a", "b", "d"]));

module.exports = unique;
