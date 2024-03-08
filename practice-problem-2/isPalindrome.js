function isPalindrome(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    if (reversed == string) {
      return true;
    }
  }
  return false;
}

console.log(isPalindrome("pop"));
export default isPalindrome;
