// Unique Strings

// Given a string that contains only letters, you have to find out the number of unique strings (including the string itself) that can be produced by re-arranging the letters of the string. Strings are case insensitive.

// HINT: Generating all the unique strings and calling length on that isn't a great solution for this problem. It can be done a lot faster...

// Examples
// uniqCount("AB") = 2n      // "AB", "BA"
// uniqCount("ABC") = 6n     // "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"
// uniqCount("ABA") = 3n     // "AAB", "ABA", "BAA"
// uniqCount("ABBb") = 4n    // "ABBB", "BABB", "BBAB", "BBBA"
// uniqCount("AbcD") = 24n   // "ABCD", etc.

// // Note that you should return a BigInt, not a Number

//Parameter: string
//Return: number of combination possible
let MAX_CHAR = 26;

// Utility function to find factorial of n.
function factorial(n) {
	let fact = BigInt(1);
	for (let i = 2; i <= n; i++) {
		fact = fact * BigInt(i);
	}
	return fact;
}
function uniqCount(xs) {
	xs = xs.toLowerCase();
	let length = xs.length;

	let freq = new Array(MAX_CHAR);
	freq.fill(0);

	for (let i = 0; i < length; i++) {
		if (xs[i].charCodeAt() >= "a".charCodeAt()) {
			freq[xs[i].charCodeAt() - "a".charCodeAt()]++;
		}
	}

	console.log(freq);

	let fact = BigInt(1);
	for (let i = 0; i < MAX_CHAR; i++) {
		fact = fact * factorial(freq[i]);
	}

	console.log(fact);
	let num = factorial(length) / fact;
	return num;
}
console.log(uniqCount("ABa")); //3n
console.log(uniqCount("AbcD")); //24n
console.log(uniqCount("ABcDEFgHIJ")); //3628800n
console.log(uniqCount("ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASH")); //34111429518116758488933545882757275627520000000n
console.log(
	uniqCount("ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASHVVYQVWKDVDWQUV") //176478346352319876826993574633158714419916931040323433922560000000n
);
