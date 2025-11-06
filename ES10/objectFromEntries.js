// Step 1: Start with an object (or get an array of entries)
const dataPoints = [
  ["name", "Astro"],
  ["type", "robot"],
  ["power", 9000],
];

// Step 2: Use Object.fromEntries() to rebuild the object
const rebuiltObject = Object.fromEntries(dataPoints);

console.log(rebuiltObject);
/* Output:
{
  name: 'Astro',
  type: 'robot',
  power: 9000
}
*/
