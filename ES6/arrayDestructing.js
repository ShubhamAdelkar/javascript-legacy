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
