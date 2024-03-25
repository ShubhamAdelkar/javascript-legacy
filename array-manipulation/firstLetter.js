const words = ["coder", "programmer", "developer"];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(cWords);
