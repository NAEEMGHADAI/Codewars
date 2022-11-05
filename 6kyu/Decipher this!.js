// Decipher this!

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
	let strArr = str.split(" ");
	let ansArr = strArr.map((ele) => {
		let i = 0;
		let num = "";
		while (!isNaN(ele[i])) {
			num += ele[i];
			i++;
		}
		// console.log(num);
		let char = String.fromCharCode(num);
		if (!isNaN(ele[ele.length - 1])) {
			return char;
		}
		if (ele.length - 1 === i) {
			return char + ele[i];
		}
		let temp = char + ele[ele.length - 1];
		// console.log("before for", temp);
		for (let j = i + 1; j < ele.length - 1; j++) {
			temp += ele[j];
		}
		temp += ele[i];
		// console.log("after for", temp);
		// console.log(temp);
		return temp;
	});
	console.log(ansArr);
	return ansArr.join(" ");
}

console.log(
	decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
); //Have a go at this and see how you do
console.log(decipherThis("72olle 103doo 100ya")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); //// 'Ready set go'
