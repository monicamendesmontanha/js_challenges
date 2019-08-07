// Palindrome
// A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward.
// For example, “racecar” and “Anna” are palindromes.
// “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

// Given a string, return true if the string is a palindrome and false if it isn’t.

const palindrome = string => {
  string = string.toLowerCase()    // turn the string to lowercase

  // reverse input string and return the result of the comparisong
  const newString = string.split('').reverse().join('')
  const result = string === newString
  return `${string} = ${newString}: ${result} `
}

console.log(palindrome("racecar"));
console.log(palindrome("Anna"));
console.log(palindrome("Table"));
console.log(palindrome("John"));