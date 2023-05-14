
//Write a program that takes an array of integers and returns the kth smallest element in the array

function getKthSmallestElement(arr,k){
 
    arr.sort((a,b)=> (a-b));

    return arr[k-1];

}
let input = [1,0,5,7,6];
let k=1;
document.write("The "+k+" smallest number is :: "+getKthSmallestElement(input,k));