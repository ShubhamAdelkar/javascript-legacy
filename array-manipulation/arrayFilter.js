function lessThanFive(array) {
  const lessThan = array.filter((el) => el < 5);
  return lessThan;
}

console.log(lessThanFive([2, 4, 6, 3, 76, 6, 1]));
export default lessThanFive;
