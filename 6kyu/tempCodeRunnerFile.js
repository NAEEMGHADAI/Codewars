// Length of missing array

function getLengthOfMissingArray(arrayOfArrays) {
	let ans = arrayOfArrays.map((ele) => ele.length);

	ans.sort((a, b) => a - b);