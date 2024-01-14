function toNumber(string) {
  const convertedString = Number(string);

  if (isNaN(convertedString)) {
    return 0; // 0
  }
  return convertedString + typeof convertedString; // 21number 
}

console.log(toNumber("21"));
