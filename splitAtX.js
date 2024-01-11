function splitAtX(string) {
  // Find the index of the lowercase 'x'
  const xIndex = string.indexOf("x");

  // If 'x' is not found, return the original string
  if (xIndex === -1) {
    return string;
  }

  // Split the string into two halves based on the index of 'x'
  const firstHalf = string.slice(0, xIndex);
  const secondHalf = string.slice(xIndex + 1);

  // Determine the longer half and return it
  return firstHalf.length >= secondHalf.length ? firstHalf : secondHalf;
}

// Examples
console.log(splitAtX("Happyxdays")); // "Happy"
console.log(splitAtX("10xDeveloper")); // "Developer"
console.log(splitAtX("NoXHere")); // "NoXHere" (no 'x' present)
