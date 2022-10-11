// Simple decrypt algo

// You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

// (1) count the number occurences of each ascii lowercase letter, and

// (2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

// For example:

// '$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
//    ^    ^   ^  ^  ^         ^^^  ^                   ^
//   [4]  [3] [2][3][1]        abc  f                   z

// 'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
//  ^  ^   ^   ^                    ^ ^ ^                    ^
// [1][3] [3] [3]                   a c e                    z
// Remember, the string returned should always be 26 characters long, and only count lowercase letters.

// Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.

//Parameter: $aaaa#bbb*ccfff!z
//return: string of length 26 and have count of aphalbet on each position eg:43200300000000000000000001

function decrypt(encryption) {
	console.log("a".charCodeAt(0) - 97);
	let objAns = {};
	for (let index = 0; index < encryption.length; index++) {
		let letterNumber = encryption[index].charCodeAt(0) - 97;
		// console.log();
		if (letterNumber <= 25 && letterNumber >= 0) {
			// console.log(letterNumber);
			console.log(encryption[index]);
			if (objAns[letterNumber]) {
				objAns[letterNumber]++;
			} else {
				objAns[letterNumber] = 1;
			}
		}
	}
	console.log(objAns);
	let objKeys = Object.keys(objAns);
	let ansArr = [];
	for (let index = 0; index < 26; index++) {
		if (objKeys.includes(index.toString())) {
			ansArr.push(objAns[index]);
		} else {
			ansArr.push(0);
		}
	}
	console.log(ansArr);
	return ansArr.join("");
}
console.log(decrypt("$aaaa#bbb*ccfff!z")); //43200300000000000000000001
console.log(decrypt("z$aaa#ccc%eee123456789")); //30303000000000000000000001
