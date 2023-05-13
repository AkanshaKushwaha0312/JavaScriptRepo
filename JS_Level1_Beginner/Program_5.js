//Write a program that takes an array of integers and returns the second largest number in the array.

function secondLargest(arr) {
  var max1st = arr[0];
  var max2nd = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1st)
    max1st = arr[i];
 }

 for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max2nd && arr[i] != max1st){
    max2nd = arr[i];
    }
 }

  return max2nd;
}

document.write("Second largest no. is : "+secondLargest([100,2,4,54,27,98,99]));


