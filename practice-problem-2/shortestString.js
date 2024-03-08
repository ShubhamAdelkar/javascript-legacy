function shortestString(str1, str2) {
  if (str1.length > str2.length) {
    return str2;
  } else {
    return str1;
  }
}


const res = shortestString("Shubham", "Bachhu");
console.log(res);

export default shortestString;