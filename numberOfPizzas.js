function numberOfPizzas(order) {
  return order.pizzas;
}

const order = {
  pizzas: 3,
  extraCheese: true,
  deliveryInstructions: "Round the back, please!",
};

const totalPizzas = numberOfPizzas(order);
console.log(totalPizzas); // 3
