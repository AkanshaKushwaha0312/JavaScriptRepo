//Write a program that takes an array of integers and returns the sum of all the numbers in the array.
  
function sumArray(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  return sum;
}

document.write('Sum = '+sumArray([1, 5, 0, 9, -3]));