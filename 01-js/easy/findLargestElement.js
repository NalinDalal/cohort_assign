/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // or you can choose to return null or any other value
      }
    
      // Assume the first element is the largest
      let largestElement = numbers[0];
    
      // Iterate through the array starting from the second element
      for (let i = 1; i < numbers.length; i++) {
        // If the current element is larger than the current largest, update the largest
        if (numbers[i] > largestElement) {
          largestElement = numbers[i];
        }
      }
    
      return largestElement;
}
    
// Example usage:
const numbers = [3, 7, 2, 9, 1];
const result = findLargestElement(numbers);
console.log(result); // Output: 9

module.exports = findLargestElement;