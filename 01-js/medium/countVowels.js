/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize a counter for vowels
  let count = 0;

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      // Increment the counter if it is a vowel
      count++;
    }
  }

  // Return the final count
  return count;
}

// Example usage:
const inputString = "Hello, World!";
const result = countVowels(inputString);
console.log(`Number of vowels: ${result}`);

module.exports = countVowels;