// Reverse every other word in the string
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//PREP
//Parameter: string(sentence)
//return: string: without extra space, reverse word and odd interval

function reverse(str) {
	let strArr = str.split(" ");
	// console.log(strArr);
	let rev = strArr.map((e, i) => {
		if (i % 2 !== 0) {
			e = e.split("").reverse().join("");
			return e;
		} else {
			return e;
		}
	});
	// console.log(rev);
	return rev.join(" ").replace(/\s+/g, " ").trim();
}

console.log(reverse("I really don't like  reversing strings!")); //I yllaer don't ekil reversing !sgnirts
console.log(reverse("Reverse this string, please!")); //Reverse siht string, !esaelp
