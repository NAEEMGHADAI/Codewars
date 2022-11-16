// Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
	// Return a sorted array.
	let oddArr = [];
	let oddPos = [];
	let j = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			oddArr[j] = array[i];
			oddPos[j] = i;
			j++;
		}
	}
	oddArr.sort((a, b) => a - b);
	// console.log(oddArr, oddPos);
	for (let i = 0; i < oddPos.length; i++) {
		array[oddPos[i]] = oddArr[i];
	}
	return array;
}
console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); //[1, 3, 5, 8, 0]
console.log(sortArray([])); //[]
console.log(sortArray([7, 1])); //[1,7]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0];
