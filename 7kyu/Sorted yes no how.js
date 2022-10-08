// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
//PREP
//Parameter: array of number, can have negative number
//return yes asc,yes dec, no

function isSortedAndHow(array) {
	let asc = 0;
	let desc = 0;
	for (let index = 0; index < array.length - 1; index++) {
		if (array[index] <= array[index + 1]) {
			asc = 1;
		} else {
			asc = 0;
			break;
		}
	}
	if (asc !== 1) {
		for (let index = 0; index < array.length - 1; index++) {
			if (array[index] >= array[index + 1]) {
				desc = 1;
			} else {
				desc = 0;
				break;
			}
		}
	}

	if (!asc && !desc) {
		return "no";
	} else if (asc) {
		return "yes, ascending";
	} else {
		return "yes, descending";
	}
	// let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
	// let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;
	// console.log(ascending, descending);
	// if (!ascending && !descending) {
	// 	return "no";
	// } else if (ascending) {
	// 	return "yes, ascending";
	// } else {
	// 	return "yes, descending";
	// }
}
console.log(isSortedAndHow([1, 2])); //yes asc
console.log(isSortedAndHow([15, 7, 3, -8])); //yes desc
console.log(isSortedAndHow([4, 2, 30])); //no
console.log(
	isSortedAndHow([-10000, -9999, -9993, -9991, -9984, -9983, -9982, -9982])
);
