// Write a program that takes two arrays of integers and returns a new array containing only the elements that appear in both arrays.

let first_array = [1, 3, 5, 7, 9];
	let second_array = [2, 3, 4, 5, 6, 9];

	function intersect_arr(first_array, second_array) {
		let new_array = [];
		for (let i = 0; i < first_array.length; i++) {
			for (let j = 0; j < second_array.length; j++) {
				if (first_array[i] === second_array[j]) {
					new_array.push(first_array[i]);
				}
			}
		}
		return new_array;
	}

	document.write("Array obtained is :");
	document.write(intersect_arr(first_array, second_array));