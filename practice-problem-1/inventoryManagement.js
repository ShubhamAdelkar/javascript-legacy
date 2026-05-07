let inventory = [];

function findProductIndex(pname) {
  pname = pname.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === pname) {
      return i;
    }
  }
  return -1;
}

function addProduct(pobject) {
  let name = pobject.name.toLowerCase();
  let index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += pobject.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: pobject.quantity,
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(pname, quantity) {
  pname = pname.toLowerCase();

  let index = findProductIndex(pname);

  if (index === -1) {
    console.log(`${pname} not found`);
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log(
      `Not enough ${pname} available, remaining pieces: ${product.quantity}`,
    );
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${pname} pieces: ${product.quantity}`);
}

addProduct({ name: "FLOUR", quantity: 5 });
findProductIndex("flour");
removeProduct("FLOUR", 5);
removeProduct("FLOUR", 10);
