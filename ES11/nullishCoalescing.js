const userSettings = {
  fontSize: 0, // 0 is a valid font size!
  theme: "light",
  maxItems: null, // Null means it hasn't been set yet
  color: undefined, // Undefined means it's also missing
};

// --- Problem with OR (||) ---
// JavaScript treats 0 as 'falsey', so it incorrectly assigns the default.
const oldSize = userSettings.fontSize || 16;
console.log("Size (Old ||):", oldSize); // Output: 16 (INCORRECT - should be 0)

// --- Solution with Nullish Coalescing (??) ---
const newSize = userSettings.fontSize ?? 16;
console.log("Size (New ??):", newSize); // Output: 0 (CORRECT - 0 is a valid value)

const defaultTheme = userSettings.maxItems ?? 10;
console.log("Max Items (??):", defaultTheme); // Output: 10 (Correctly assigns default for null)

const defaultColor = "blue";

// Test 1: Using the OR operator (||)
const colorWithOR = userSettings.color || defaultColor;
console.log("Color (with ||):", colorWithOR); // Output: "blue"

// Test 2: Using the Nullish Coalescing operator (??)
const colorWithNullish = userSettings.color ?? defaultColor;
console.log("Color (with ??):", colorWithNullish); // Output: "blue"
