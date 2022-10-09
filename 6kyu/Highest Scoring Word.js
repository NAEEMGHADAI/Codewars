// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//PREP
//Parameter : A sentence in the form of string
//return : highest scoring string

function high(x) {
	let xArr = x.split(" ");
	// console.log(xArr);
	let ans = {};
	xArr.forEach((element) => {
		let sum = 0;
		for (let first of element) {
			// console.log(first.charCodeAt(0) - 96);
			sum += first.charCodeAt(0) - 96;
		}
		ans[element] = sum;
	});
	// console.log(ans);
	let high = 0;

	for (const key in ans) {
		if (high < ans[key]) {
			high = ans[key];
		}
	}
	// console.log(high);
	for (const key in ans) {
		if (ans[key] === high) {
			return key;
		}
	}
}

console.log(high("man i need a taxi up to ubud")); //"taxi"
console.log(high("what time are we climbing up the volcano")); //volcano
console.log(high("take me to semynak")); //semynak
console.log(high("aa b")); //aa
console.log(high("b aa")); //b
console.log(high("bb d")); //bb
console.log(high("d bb")); //d
console.log(high("aaa b")); //aaa

console.log(high("sbif msnb jevx qlnr")); //jevx
