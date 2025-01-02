/** product: calculate the product of an array of numbers. */
// e.g. product([2, 3, 4])   // 24

function product(nums) {
  // Base case: if the array is empty, return 1
  if (nums.length === 0) {
    return 1;
  }
// Recursive case: multiply the first number by the product of the rest
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
//longest(["hello", "hi", "hola"])  // 5

function longest(words) {
  // Base case: if the array is empty, return 0
  if (words.length === 0) {
      return 0;
  }
  
  // Compare the length of the first word with the longest of the rest
  let firstWordLength = words[0].length;
  let restLongest = longest(words.slice(1));
  
  // Return the larger of the two values: the first word length or the rest's longest length
  return Math.max(firstWordLength, restLongest);
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */
// everyOther("hello")  // "hlo"
function isPalindrome(str) {
  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (str.length <= 1) {
      return true;
  }

  // Recursive case: compare the first and last characters
  if (str[0] === str[str.length - 1]) {
      // Check the substring excluding the first and last characters
      return isPalindrome(str.slice(1, str.length - 1));
  } else {
      return false;
  }
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */
/*
let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1
*/
function findIndex(arr, val, index = 0) {
  // Base case: if the array is empty, return -1 (value not found)
  if (arr.length === 0) {
      return -1;
  }

  // If the first element matches the value, return the current index
  if (arr[0] === val) {
      return index;
  }

  // Recursive case: search for the value in the rest of the array, increment the index
  return findIndex(arr.slice(1), val, index + 1);
}


/** revString: return a copy of a string, but in reverse. */
// revString("porcupine") // 'enipucrop'
function revString(str) {
  // Base case: if the string is empty or has one character, return it as is
  if (str.length <= 1) {
      return str;
  }

  // Recursive case: reverse the rest of the string and append the first character at the end
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];

  // Iterate over each key in the object
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          // If the value is a string, add it to the result array
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          // If the value is an object, recursively gather strings from it
          result = result.concat(gatherStrings(obj[key]));
      }
  }

  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  // Helper function to perform binary search recursively
  function search(low, high) {
      // Base case: if the range is invalid, return -1 (value not found)
      if (low > high) {
          return -1;
      }

      // Find the middle index
      let mid = Math.floor((low + high) / 2);
      
      // Compare the middle element with the target value
      if (arr[mid] === val) {
          return mid;  // Value found, return its index
      } else if (arr[mid] < val) {
          // If value is greater than middle element, search the right half
          return search(mid + 1, high);
      } else {
          // If value is less than middle element, search the left half
          return search(low, mid - 1);
      }
  }

  // Call the helper function with the full range of the array
  return search(0, arr.length - 1);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
