//write a program to check if a number is multiple of 3 or not?

function isMultipleOfThree(num) {
    // Check if num is a number and if the remainder of num divided by 3 is 0
    if (typeof num === 'number' && num % 3 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  
  console.log(isMultipleOfThree(9));  // true
  console.log(isMultipleOfThree(10)); // false
  console.log(isMultipleOfThree(0));  // true
  console.log(isMultipleOfThree(-6)); // true
  