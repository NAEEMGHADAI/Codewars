// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique
//Parameter: Array of integers, which will have same number except one
//Return: a unique number

function findUniq(arr) {
	// do magic
	let unique = arr[0];
	for (let index = 1; index < arr.length - 1; index++) {
		// console.log(arr[index], arr[index + 1]);
		if (arr[index] != arr[index + 1]) {
			if (arr[index] === unique) {
				return arr[index + 1];
			} else {
				return arr[index];
			}
		}
	}
	return unique;
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); //2
console.log(findUniq([3, 10, 3, 3, 3])); //10
console.log(findUniq([1, 0, 0])); //1
