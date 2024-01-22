function toJSON(obj) {
  const person = JSON.stringify(obj);
  return person;
}

console.log(toJSON({ name: "Shubham" }));
