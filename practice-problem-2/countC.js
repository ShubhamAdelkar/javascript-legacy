function countC(str) {
  let cs = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "c" || str[i] == "C") {
      cs.push(str[i]);
    }
  }
  return cs.length;
}

module.exports = countC;

const res = countC("Cincinatiee");
console.log(res);
