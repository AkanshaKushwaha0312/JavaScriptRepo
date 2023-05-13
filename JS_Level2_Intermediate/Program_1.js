
//Write a program that takes an array of integers and returns the average of all the numbers in the array

function AvgArray(array) {

    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    return sum/array.length;
  }
  
  document.write('Average of array is :: '+AvgArray([1, 5, 0, 9, 3]));