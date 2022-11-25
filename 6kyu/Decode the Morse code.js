// Decode the Morse code
let decodeMorse = function (morseCode) {
	// Your code here
	// You can use MORSE_CODE[morse]
	let morse = morseCode.trim();
	let morseArr = morse.split("   ");
	console.log(morseArr);
	let ans = "";

	morseArr.forEach((element) => {
		let temp = "";
		let i = 0;
		while (i < element.length) {
			if (element[i] !== " ") {
				temp += element[i];
				i++;
			} else if (element[i] === " ") {
				// ans += MORSE_CODE[temp];
				console.log(temp);
				temp = "";
				i++;
			}
		}
		if (temp.length > 0) {
			ans += MORSE_CODE[temp];
			ans += " ";
		}
	});

	return ans.trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); //HEY JUDE
console.log(decodeMorse("   .... . -.--   ")); //HEY
