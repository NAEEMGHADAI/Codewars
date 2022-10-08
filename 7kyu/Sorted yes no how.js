//PREP
//Parameter: array of number, can have negative number
//return yes asc,yes dec, no

function isSortedAndHow(array) {
	let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
	let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;
	console.log(ascending, descending);
	if (!ascending && !descending) {
		return "no";
	} else if (ascending) {
		return "yes, ascending";
	} else {
		return "yes, descending";
	}
}
console.log(isSortedAndHow([1, 2])); //yes asc
console.log(isSortedAndHow([15, 7, 3, -8])); //yes desc
console.log(isSortedAndHow([4, 2, 30])); //no
console.log(
	isSortedAndHow([-10000, -9999, -9993, -9991, -9984, -9983, -9982, -9982])
);
