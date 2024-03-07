// arary destructing
const [c, d] = [1, 2, 3, 4, 5, 6];
console.log(c, d);

// swaping using destructing
let a = 8,
  b = 6;
console.log(([a, b] = [b, a]));

// destructing using commas to reach the desired index
const [p, q, , , r] = [1, 2, 3, 4, 5, 6];
console.log(p, q, r);

// collecting rest of the array into seperate array
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  console.log("removed elements " + a, b);
  return arr;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.table(sourceWithoutFirstTwo);
