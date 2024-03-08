function unique(array) {
  const uniqueValues = array.filter((el, i) => array.indexOf(el) === i);
  return uniqueValues;
}

console.log(unique(["a", "b", "c", "a", "b", "d"]));

export default unique;
