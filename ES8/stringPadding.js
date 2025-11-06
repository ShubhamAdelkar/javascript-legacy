const month = "2";
const year = "2025";

// PadStart: Add a '0' to the front if the length is less than 2
const neatMonth = month.padStart(2, "0"); // Output: "02"
const neatYear = year.padStart(6, "1"); // Output: "112025" (Pads with '1's up to length 6)
console.log(neatMonth, neatYear);
// PadEnd: Pad with spaces up to length 10
const item = "Bread";
const paddedItem = item.padEnd(10, "_"); // Output: "Bread     "
console.log(paddedItem);
