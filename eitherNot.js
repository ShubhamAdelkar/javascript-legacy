function eitherNotBoth(num) {
  const divisibleBy3 = num % 3 === 0;
  const divisibleBy5 = num % 5 === 0;

  return !(divisibleBy3 && divisibleBy5);
}

console.log(eitherNotBoth(44));
