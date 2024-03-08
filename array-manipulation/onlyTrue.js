function onlyTrue(array) {
  const onlytrue = array.filter((el) => el);
  return onlytrue;
}

console.log(onlyTrue([true, false, true, false, false]));
export default onlyTrue;
