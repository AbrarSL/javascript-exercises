const palindromes = function(sentence) {
  return (sentence === sentence.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
