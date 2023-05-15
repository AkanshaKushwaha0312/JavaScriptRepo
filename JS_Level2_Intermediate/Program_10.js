 //Write a program that takes an array of integers and returns a new array containing only the elements that appear more than once in the original array.
 
 let arr=[1,2,2,3,4,5,6,6,7,8,8,8]
 let nonUniqueArray=[]
 for(let i=0;i<arr.length;i++){
      if(i!=arr.indexOf(arr[i]) && nonUniqueArray.indexOf(arr[i])==-1){ //we are comparing with -1 because, indexof method return -1 if that element is not present in the array. So that we dont push same element once than once.
         nonUniqueArray.push(arr[i]);
      }
 }
 
 document.write('Array with non Unique values ::'+nonUniqueArray);
 
 