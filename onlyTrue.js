function onlyTrue(array) {
  const onlytrue = array.filter(function (el) {
    return el;
  });
  return onlytrue;
}

console.log(onlyTrue([true, false, true, false, false]));
module.exports = onlyTrue;
