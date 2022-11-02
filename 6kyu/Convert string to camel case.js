// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
	let ans = "";
	let strArr = [];
	if (str.includes("-")) {
		strArr = str.split("-");
	} else if (str.includes("_")) {
		strArr = str.split("_");
	}
	// console.log(strArr);
	strArr.forEach((ele, i) => {
		if (i === 0) {
			ans = ans + ele;
		} else {
			ans =
				ans +
				ele[0].toUpperCase() +
				ele.split("").slice(1, ele.length).join("");
		}
	});
	return ans;
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior")); //theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")); //TheStealthWarrior
console.log(toCamelCase("A-B-C")); //ABC
