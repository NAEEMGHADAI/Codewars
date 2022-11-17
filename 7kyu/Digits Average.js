// Digits Average

// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

// Examples
// digitsAverage(246)  ==>  4

// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4

// digitsAverage(89)  ==>  9

// original: 8   9
//            \ /
// 1st iter:   9
// p.s. for a bigger challenge, check out the one line version of this kata by myjinxin2015!

function digitsAverage(input) {
	let strNum = String(input);
	while (strNum.length !== 1) {
		let temp = "";
		for (let i = 0; i < strNum.length - 1; i++) {
			temp += Math.round((+strNum[i] + +strNum[i + 1]) / 2);
		}
		strNum = temp;
	}
	return strNum;
}

console.log(digitsAverage(246)); //4
console.log(digitsAverage(89)); //9
console.log(digitsAverage(2)); //2
console.log(digitsAverage(245)); //4
console.log(digitsAverage(345)); //5
console.log(digitsAverage(346)); //5
