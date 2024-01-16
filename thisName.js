function thisName() {
  return this.name;
}

const name = thisName.call({ name: "Shubham" });
console.log(name);
