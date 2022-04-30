const palindromes = function(sentence) {
  let sanitizedString = sentence.toLowerCase().replace(/[^a-z]/g, '');

  return sanitizedString === sanitizedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
