// Framed Reflection
// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:
// *********
// * olleH *
// * dlroW *
// *********

// Words in your solution should be left-aligned.
//Parameter: string
//return : *string.length + *2 \n* + 1 of number of words , *string.length + *2 \n*
function mirror(text) {
	let strArr = text.split(" ");
	let high = 0;
	strArr.forEach((element, i) => {
		if (element.length > high) {
			high = element.length;
		}
		strArr[i] = element.split("").reverse().join("");
	});
	console.log(strArr);
	let ans = "";

	for (let index = 0; index < high + 3; index++) {
		ans += "*";
	}
	console.log(high);
	for (let index = 0; index < strArr.length; index++) {
		ans += `*\n* ${strArr[index]}`;
		console.log(high - strArr[index].length);
		for (let j = 0; j < high - strArr[index].length + 1; j++) {
			ans += " ";
		}
	}

	ans += "*\n*";
	for (let index = 0; index < high + 3; index++) {
		ans += "*";
	}
	return ans;
}

console.log(mirror("Hello World")); //*********\n* olleH *\n* dlroW *\n*********
console.log(mirror("Codewars")); //************\n* srawedoC *\n************
console.log(mirror("fm aeouza wwf"));
