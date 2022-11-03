// String transformer

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//Parameter: string with mixed character (lower and uppercase)
//Return: string
function stringTransformer(str) {
	let strArr = str.split("");
	let changedArr = strArr
		.map((ele) =>
			ele.toLowerCase() === ele ? ele.toUpperCase() : ele.toLowerCase()
		)
		.join("");
	return changedArr.split(" ").reverse().join(" ");
}

console.log(stringTransformer("Example string")); //STRING eXAMPLE
