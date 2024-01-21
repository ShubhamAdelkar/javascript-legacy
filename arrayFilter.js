function lessThanFive(array) {
  const lessThan = array.filter(function (el) {
    return el < 5;
  });
  return lessThan;
}

console.log(lessThanFive([2, 4, 6, 3, 76, 6, 1]));
module.exports = lessThanFive;
