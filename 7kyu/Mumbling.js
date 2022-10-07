// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	s = s.toLowerCase();

	let arrS = s.split("");

	let arrOfLetters = [];
	arrS.map((x, i) => {
		let temp = "";
		for (let index = 0; index < i + 1; index++) {
			if (index === 0) {
				x = x.toUpperCase();
			}
			temp += x;
			if (index === 0) {
				x = x.toLowerCase();
			}
		}
		arrOfLetters.push(temp);
	});

	let ans = "";
	arrOfLetters.forEach((element, i) => {
		if (i != arrOfLetters.length - 1) {
			ans += element;
			ans += "-";
		} else {
			ans += element;
		}
	});

	return ans;
}
console.log(accum("ZpglnRxqenU"));
