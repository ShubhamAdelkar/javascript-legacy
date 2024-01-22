// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
  return foods.reduce((accumulator, currentValue) => {
    accumulator[currentValue.type] = accumulator[currentValue.type] || [];
    accumulator[currentValue.type].push(currentValue.food);
    return accumulator;
  }, {});
}

console.table(
  group([
    { food: "apple", type: "fruit" },
    { food: "orange", type: "fruit" },
    { food: "carrot", type: "vegetable" },
  ])
);

module.exports = group;
