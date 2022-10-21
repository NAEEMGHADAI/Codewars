// Even numbers in an array
//Parameter: array of numbers, number which will denote the count
//Return: //array with even number with length === number given in the parameter

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
	let ans = [];
	let c = number;
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] % 2 === 0) {
			ans.unshift(array[i]);
			c--;
		}
		if (c === 0) {
			break;
		}
	}
	return ans;
	// return array.filter((item) => item % 2 === 0).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //[-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //[6]
console.log(evenNumbers([2, 8, -2, 4, 2], 2)); //
