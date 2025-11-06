const nestedToys = [1, [2, 3], [4, [5, 6]]];

// Default flat(): Flattens one level deep
const oneLevelFlat = nestedToys.flat();
console.log("One Level Flat:", oneLevelFlat);
// Output: [ 1, 2, 3, 4, [ 5, 6 ] ] (Still nested)

// flat(2): Flattens two levels deep
const twoLevelFlat = nestedToys.flat(2);
console.log("Two Levels Flat:", twoLevelFlat);
// Output: [ 1, 2, 3, 4, 5, 6 ] (Fully flat)

// flat(Infinity): Flattens all nested levels (best practice for unknown depth)
const fullyFlat = nestedToys.flat(Infinity);
console.log("Fully Flat:", fullyFlat);
// Output: [ 1, 2, 3, 4, 5, 6 ]
