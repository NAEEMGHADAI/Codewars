//'x' marks the spot.
// Task:
// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Examples
// Input: []
// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]
// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]
// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]
//Parameter: array of arrays each array contains a character
//return: array with the x and y coordinate of 'x'

const xMarksTheSpot = (input) => {
	let ans = [];
	if (input.length === 0) {
		return [];
	}
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[0].length; j++) {
			if (input[i][j] === "x") {
				if (ans.length === 2) {
					return [];
				}
				ans.push(i);
				ans.push(j);
			}
		}
	}
	return ans;
};

console.log(xMarksTheSpot([])); //[]
console.log(
	xMarksTheSpot([
		["o", "o"],
		["o", "o"],
	])
); //[]

console.log(
	xMarksTheSpot([
		["x", "o"],
		["o", "x"],
	])
); //[]

console.log(
	xMarksTheSpot([
		["x", "o"],
		["o", "o"],
	])
); //[0,0]
console.log(
	xMarksTheSpot([
		["o", "o", "o", "o", "o", "o", "o", "o"],
		["o", "o", "o", "o", "o", "o", "o", "o"],
		["o", "o", "o", "o", "o", "o", "o", "o"],
		["o", "o", "o", "o", "o", "o", "o", "o"],
		["o", "o", "o", "o", "o", "o", "x", "o"],
		["o", "o", "o", "o", "o", "o", "o", "o"],
	])
); // [4, 6]
