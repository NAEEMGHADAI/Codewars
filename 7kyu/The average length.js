// The average length

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(str) {
	// good luck
	let sum = 0;
	let len = str[0].length;
	for (let i = 0; i < str.length; i++) {
		sum += str[i].length;
	}
	let avg = Math.round(sum / str.length - 1);
	console.log(avg);
	let ans = [];
	for (let i = 0; i < str.length; i++) {
		ans.push(
			Array(avg + 1)
				.fill(str[i][0])
				.join("")
		);
	}
	return ans;
}

console.log(averageLength(["u", "y"])); //['u', 'y']
console.log(averageLength(["aa", "bbb", "cccc"])); //['aaa', 'bbb', 'ccc']
console.log(averageLength(["aa", "bb", "ddd", "eee"])); //['aaa', 'bbb', 'ddd', 'eee']
console.log(
	averageLength([
		"ssssss",
		"kkkkkk",
		"pppppp",
		"hhhhhh",
		"nnnnnn",
		"uuuuuu",
		"bbbbbb",
		"iiiiii",
		"uuuuuu",
	])
);
