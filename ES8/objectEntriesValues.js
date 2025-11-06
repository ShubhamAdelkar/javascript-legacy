const cookieBox = {
  flavor: "chocolate chip",
  count: 12,
  isFresh: true,
};

// 1. Object.values() - Get only the values
console.log(Object.values(cookieBox));
// Output: [ 'chocolate chip', 12, true ]

// 2. Object.entries() - Get key and value pairs
console.log(Object.entries(cookieBox));
/* Output (An Array of Arrays): 
[
  [ 'flavor', 'chocolate chip' ],
  [ 'count', 12 ],
  [ 'isFresh', true ]
  ]
  */
// 3. Object.keys() - Get keys
console.log(Object.keys(cookieBox));
