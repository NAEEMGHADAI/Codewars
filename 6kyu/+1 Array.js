// +1 Array
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]
//Parameter: array of numbers
//return: array, which has last number +1, if ans is -ve or > then 10 return null

function upArray(arr) {
	let n = arr.length - 1;
	let i = n;
	if (arr.length === 0) {
		return null;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			return null;
		}
		if (arr[i] > 9) {
			return null;
		}
	}
	while (i >= 0) {
		if (arr[i] < 0) {
			return null;
		}
		if (arr[i] > 9) {
			return null;
		}
		arr[i] += 1;
		if (arr[i] === 10) {
			arr[i] = 0;
			if (i === 0) {
				arr.unshift(1);
			}
		} else {
			break;
		}
		i--;
	}
	return arr;
}
console.log(upArray([4, 3, 2, 5])); // [4, 3, 2, 6]
console.log(upArray([2, 3, 9, 9])); // [2, 4, 0, 0]
console.log(upArray([9, 9])); // [1, 0, 0];
console.log(upArray([0, 7])); // [0,8]
console.log(
	upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
console.log(upArray([1, -9])); //null
console.log(upArray([11, 1])); //null
