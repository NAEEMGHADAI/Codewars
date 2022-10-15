// Find the unique string
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// This is the second kata in series:

// Find the unique number
// Find the unique string (this kata)
// Find The Unique
// Find the unique string
function findUniq(arr) {
	let newArr = [];
	for (let index = 0; index < arr.length; index++) {
		let newStr = arr[index].toLowerCase();
		let set = new Set(newStr);
		newArr[index] = Array.from(set).sort().join("");
	}
	console.log(arr);
	let obj = {};
	for (let index = 0; index < arr.length; index++) {
		if (!obj[newArr[index]]) {
			obj[newArr[index]] = 1;
		} else {
			obj[newArr[index]]++;
		}
	}
	console.log(obj);
	let ans = "";
	for (const key in obj) {
		if (obj[key] === 1) {
			ans = key;
			break;
		}
	}
	for (let index = 0; index < arr.length; index++) {
		if (ans === newArr[index]) {
			return arr[index];
		}
	}
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); //BbBb
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); //foo
console.log(
	findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
);
//Harry Potter
console.log(findUniq(["    ", "  ", " ", "a", " ", ""])); //a
console.log(findUniq(["a", "p", "p", "p"])); //a
