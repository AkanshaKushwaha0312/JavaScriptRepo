// Write a program that takes an array of integers and returns a new array containing only the even numbers from the original array.

let numbers = [10, 23, 12, 21];

let even_array = [];
for(let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0)
	even_array.push(numbers[i]);
}

document.write('Even numbers in an array are :' +even_array);