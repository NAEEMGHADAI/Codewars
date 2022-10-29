// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
	// let tStr = str.replace(" ", "");
	if (str.length === 0) {
		return false;
	}
	let spStr = str.split(" ");
	console.log(spStr);
	let ans = spStr.reduce((temp, ele) => {
		return ele.length > 0 ? (temp += capitalizeFirstLetter(ele)) : temp;
	}, "#");
	if (ans === "#" || ans.length > 140) {
		return false;
	} else {
		return ans;
	}
}

function capitalizeFirstLetter(ele) {
	let cap = ele[0].toUpperCase();
	for (let j = 1; j < ele.length; j++) {
		cap += ele[j];
	}
	// console.log("after for:", cap);
	return cap;
}

console.log(generateHashtag("")); //false
console.log(generateHashtag(" ")); //false
console.log(generateHashtag(" ".repeat(200))); //false
console.log(generateHashtag("Do We have A Hashtag")); //#DoWeHaveAHashtag
console.log(generateHashtag("Codewars")); //#Codewars
console.log(generateHashtag("Codewars Is Nice")); //#CodewarsIsNice
console.log(generateHashtag("Codewars is nice")); //#CodewarsIsNice
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); //#CodeWars
console.log(generateHashtag("a".repeat(139))); //"#A" + "a".repeat(138)
console.log(generateHashtag("a".repeat(140))); //false
