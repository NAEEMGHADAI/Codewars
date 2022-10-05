// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
	let vowelsArr = ["a", "e", "i", "o", "u"];
	let strArr = str.split("");
	// console.log(strArr);
	let noVowelArr = strArr.filter(
		(ele) =>
			!vowelsArr.includes(ele.toUpperCase()) &&
			!vowelsArr.includes(ele.toLowerCase())
	);
	// console.log(noVowelArr);
	let ansStr = noVowelArr.join("");
	return ansStr;
}

console.log(disemvowel("This website is for losers LOL!"));
