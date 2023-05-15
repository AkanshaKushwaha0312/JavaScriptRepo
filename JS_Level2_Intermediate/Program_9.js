
//Write a program that takes an array of integers and returns the number of inversions in the array (i.e., the number of pairs of elements where the first element is greater than the second element but appears before it in the array).

function getNumberOfInversion(arr){
    let count=0;

     for(let i=0; i < arr.length; i++){
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] > arr[j]) {
           count += 1;
         }
     }
   }
   return count;
}

let input=[3,2,1]; // there will be 3 pairs :: 3,1  2,1  3,1

document.write("The total no. of pairs formed is :: "+getNumberOfInversion(input));