function isPalindrome(string) {
  // Start coding here

  if (string === string.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
  // console.log(string.split("").reverse());
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
