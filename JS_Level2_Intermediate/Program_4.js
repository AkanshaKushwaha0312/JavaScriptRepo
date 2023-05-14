
//Write a program that takes an array of integers and returns the median of the numbers in the array (i.e., the middle number when the array is sorted).

function getMedian(arr){

	let size=arr.length;
	let middle = Math.floor(size/2); //To get integer value when u get floating no.
    console.log(middle);

	if (size%2===0){ 
		return (arr[middle-1]+arr[middle])/2;
	}
	else{
		return arr[middle];
	}

}

let input1 = [1, 3, 2, 0, 10, 7, 4, 8, 9, 6, 5]; 
let input2 = [47, 32, 51, 19, 99, 38];

input1.sort((a, b) => a - b); //Algorithm to sort in ascending order 
input2.sort((a, b) => a - b);

document.write("Median of first array is :: "+getMedian(input1));
document.write("</br>Median of second array is :: "+getMedian(input2));