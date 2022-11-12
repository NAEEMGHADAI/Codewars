// Assemble string

// Task
// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"

// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

function assembleString(array) {
	let ans = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			if (i == 0) {
				ans.push(array[i][j]);
			}
			if (ans[j] === "*" || array[i][j] !== "*") {
				ans[j] = array[i][j];
			}
		}
	}
	console.log(ans);
	return ans.map((x) => (x == "*" ? "#" : x)).join("");
}
console.log(
	assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])
); //Hello, World!
console.log(
	assembleString([
		".** . .' .'' ! ! .",
		". . . .' **' ! * .",
		"* . .*.* .'' * ! .",
		". . .*.' .**** ! .",
		"**. * .* .*' ! ! .",
	])
); //. . . .' .'' ! ! .
console.log(
	assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."])
); //. . . .
console.log(
	assembleString([
		"12***6789",
		"**3456789",
		"12345**8*",
		"***456**9",
		"1*3*5*7*9",
		"*2*456789",
	])
); //123456789
console.log(assembleString(["******", "******", "******", "******"])); //######
console.log(
	assembleString([
		"*#*#*#*#*#*#*#*",
		"*#*#*#*#*#*#*#*",
		"*#*#*#*#*#*#*#*",
		"*#*#*#*#*#*#*#*",
	])
); //###############
