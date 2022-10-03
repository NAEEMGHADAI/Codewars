// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
	let numX = 0,
		numO = 0;

	for (const element of str) {
		if (element.toLowerCase() === "x") {
			numX += 1;
		} else if (element.toLowerCase() === "o") {
			numO += 1;
		}
	}
	if (numO === numX) {
		return true;
	}
	return false;
}

console.log(XO("Oo"));
