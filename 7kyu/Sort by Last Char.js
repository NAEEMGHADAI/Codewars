// Sort by Last Char

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//Parameter: string
//Return: array of string sorted with according to last char

function last(x) {
	let strArr = x.split(" ");
	strArr.sort((a, b) => {
		console.log(a.slice(-1).charCodeAt(0), b.slice(-1).charCodeAt(0));
		if (a !== "" && a !== "") {
			return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
		}
	});
	return strArr;
}

console.log(last("man i need a taxi up to ubud")); //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last("what time are we climbing up the volcano")); //['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last("take me to semynak")); //['take', 'me', 'semynak', 'to']
console.log(
	last(
		"ifsubzgwwrhiehxvaxjbgirxbg yebrebkjrbjynaiaigpnhkxxhj iritawelxwewqhzwjfxvvkdrfi vffxevltuczdokoemijnhcgbkk"
	)
);
