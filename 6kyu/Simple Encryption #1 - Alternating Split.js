// Simple Encryption #1 - Alternating Split

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
	if (n <= 0 || text === null) {
		return text;
	}
	while (n--) {
		let ans = "";
		for (let i = 1; i < text.length; i += 2) {
			ans += text[i];
		}
		for (let i = 0; i < text.length; i += 2) {
			ans += text[i];
		}
		text = ans;
	}

	return text;
}

function decrypt(encryptedText, n) {
	if (n <= 0) {
		return encryptedText;
	}
	let half = Math.floor(encryptedText.length / 2);
	let temp = encryptedText;
	for (let k = 0; k < n; k++) {
		let j = half;
		let ans = "";
		for (let i = 0; i < half; i++) {
			ans = ans + temp[j] + temp[i];
			j++;
		}
		if (temp.length % 2 !== 0) {
			ans += temp[temp.length - 1];
		}
		temp = ans;
	}

	return temp;
}

console.log(encrypt("This is a test!", 0)); //This is a test!
console.log(encrypt("This is a test!", 1)); //hsi  etTi sats!
console.log(encrypt("This is a test!", 2)); //s eT ashi tist!
console.log(encrypt("This is a test!", 3)); //Tah itse sits!
console.log(encrypt("This is a test!", 4)); //This is a test!
console.log(encrypt("This is a test!", -1)); //This is a test!
console.log(encrypt("This kata is very interesting!", 1)); //hskt svr neetn!Ti aai eyitrsig
console.log(
	encrypt(
		"WMZJGRPCHVCOLUHNXNOTPSDCJBPTWXBNVVLZXZUAKVGEYZMAORNGPGNTMJMXDXEMIEAK",
		8
	)
); //BXCNXAVKZVIPJTNLERXKXDDGNMHAMVMBMOROGGZAWXSPHZCUWNEJTNOCVJLETMPGUYPZ

console.log();

console.log(decrypt("This is a test!", 0)); //This is a test!
console.log(decrypt("hsi  etTi sats!", 1)); //This is a test!
console.log(decrypt("s eT ashi tist!", 2)); //This is a test!
console.log(decrypt(" Tah itse sits!", 3)); //This is a test!
console.log(decrypt("This is a test!", 4)); //This is a test!
console.log(decrypt("This is a test!", -1)); //This is a test!
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //This kata is very interesting!
