// --- SPREAD PROPERTIES (Copying/Merging) ---
const baseRecipe = {
  flavor: "chocolate",
  hasNuts: true,
  sugarLevel: "medium",
};

// Spread: Create a new recipe object, override 'flavor' and add 'isVegan'
const peanutButterRecipe = {
  ...baseRecipe, // Copies all baseRecipe properties first
  flavor: "peanut butter", // Overrides the flavor property
  isVegan: true, // Adds a new property
};

console.log("New Recipe:", peanutButterRecipe);
// Output: { flavor: 'peanut butter', hasNuts: true, sugarLevel: 'medium', isVegan: true }

// --- REST PROPERTIES (Collecting) ---
const dog = {
  name: "Buddy",
  age: 5,
  breed: "Labrador",
  isFriendly: true,
};

// Rest: Destructure 'name' and 'age', collect the rest into the 'details' object
const { name, age, ...details } = dog;

console.log(`Name: ${name}, Age: ${age}`); // Name: Buddy, Age: 5
console.log("Rest of Details:", details);
// Output: { breed: 'Labrador', isFriendly: true }
