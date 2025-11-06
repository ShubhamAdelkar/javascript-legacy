const text = "The cat sat on the mat. The cat loves the cat.";

// Old way (required regex /g flag)
const old = text.replace(/cat/g, "dog");

// New way (simple string argument replaces ALL instances)
const newText = text.replaceAll("cat", "dog");

console.log("Old way:", old); // Old way: The dog sat on the mat. The dog loves the dog.
console.log("New way:", newText); // New way: The dog sat on the mat. The dog loves the dog.
