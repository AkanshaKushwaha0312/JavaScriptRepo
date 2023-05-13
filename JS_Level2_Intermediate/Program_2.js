//Write a program that takes an array of integers and returns a new array containing only the unique elements from the original array.

function unique_arr(arr){
let uniqueArray=[]
for(let i=0;i<arr.length;i++){
      if(arr.indexOf(arr[i])==i){
           uniqueArray.push(arr[i]);
     }
}
return uniqueArray;
}
let arr=[2 ,3, 4, 2, 8, 4];
document.write("The unique array is :: "+unique_arr(arr));