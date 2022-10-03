// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	let strArr = s.split(" ");
	let short = 999999999;
	strArr.map((e) => {
		e.length < short ? (short = e.length) : short;
	});
	return short;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
