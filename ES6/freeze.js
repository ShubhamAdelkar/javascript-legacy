function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // prevent object mutation
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(freezeObj);
