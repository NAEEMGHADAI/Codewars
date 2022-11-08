// Break camelCase
// complete the function

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
	let tempArr = [];
	let temp = "";
	for (let i = 0; i < string.length; i++) {
		if (string[i].toUpperCase() === string[i]) {
			tempArr.push(temp);
			tempArr.push(" ");
			temp = string[i];
		} else {
			temp += string[i];
		}
	}
	tempArr.push(temp);
	return tempArr.join("");
}

console.log(solution("camelCasing")); //camel Casing
console.log(solution("camelCasingTest")); //camel Casing Test
