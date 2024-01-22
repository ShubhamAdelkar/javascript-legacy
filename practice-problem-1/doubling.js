function topDouble(value, top) {
  let currentValue = value;
  let previousValue = value;

  while (currentValue <= top) {
    previousValue = currentValue;
    currentValue *= 2; // Double the current value
  }

  // Return the last value that was below the top
  return previousValue;
}

// Example usage:
const result = topDouble(2, 100);
console.log(result); // Output: 64
