// Length of missing array

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
	if (
		!Array.isArray(arrayOfArrays) ||
		arrayOfArrays === null ||
		!arrayOfArrays.length
	) {
		return 0;
	}
	if (arrayOfArrays.includes(null)) {
		return 0;
	}
	let ans = arrayOfArrays.map((ele) => ele.length);

	ans.sort((a, b) => a - b);
	console.log(ans);
	for (let i = 0; i < ans.length - 1; i++) {
		if (ans[i] === 0) {
			return 0;
		}
		if (ans[i + 1] - ans[i] === 2) {
			console.log(ans[i] + 1);
			return ans[i] + 1;
		}
	}
}
console.log(
	getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //3
console.log(
	getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //2
console.log(getLengthOfMissingArray([[null], [null, null, null]])); //2
console.log(
	getLengthOfMissingArray([
		["a", "a", "a"],
		["a", "a"],
		["a", "a", "a", "a"],
		["a"],
		["a", "a", "a", "a", "a", "a"],
	])
); //5

console.log(getLengthOfMissingArray([])); //0
