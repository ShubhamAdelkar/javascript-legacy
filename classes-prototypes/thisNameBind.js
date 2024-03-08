//same but with bind() instead call().

function thisName() {
  return this.name;
}

const newFunction = thisName.bind({ name: "Shubham" });
const newFunction2 = thisName.bind({ name: "Bob" });
console.log(newFunction()); // Shubham
console.log(newFunction2()); //Bob

export default newFunction2;
