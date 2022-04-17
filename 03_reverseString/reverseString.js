const reverseString = function(string) {
  let stringArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    stringArray[string.length - i - 1] = string[i];
  }

  return stringArray.join("");
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
