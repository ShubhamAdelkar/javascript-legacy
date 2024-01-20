// array sort in asending order using comparison function
function sortUp(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

sortUp([2, 4, 5, 3, 1]); // [1,2,3,4,5]
module.exports = sortUp;
