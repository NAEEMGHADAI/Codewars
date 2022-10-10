// Odd March Bits 8 bits
// Odd bits are getting ready for Bits Battles.

// Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

// Return an array of all the steps.

// 1 <= n <= 8

// NOTE: n != 0, because n represents the number of 1s.

// Examples
// This resembles a simple 8 LED chaser:

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110
//Parameter: number less than 8
//Return : array of numbers right to left march

function bitMarch(n) {
	let ans = [];
	for (let index = 0; index <= 8 - n; index++) {
		let temp = 8 - index - n;
		// console.log(temp);
		let a = [];
		for (let j = 0; j < temp; j++) {
			a.push(0);
		}
		let i = 0;
		while (i < n) {
			a.push(1);
			i++;
		}
		for (let j = temp + n; j < 8; j++) {
			a.push(0);
		}
		// console.log(a);
		ans.push(a);
	}
	return ans;
}

console.log(bitMarch(1));
// [
// 	[0, 0, 0, 0, 0, 0, 0, 1],
// 	[0, 0, 0, 0, 0, 0, 1, 0],
// 	[0, 0, 0, 0, 0, 1, 0, 0],
// 	[0, 0, 0, 0, 1, 0, 0, 0],
// 	[0, 0, 0, 1, 0, 0, 0, 0],
// 	[0, 0, 1, 0, 0, 0, 0, 0],
// 	[0, 1, 0, 0, 0, 0, 0, 0],
// 	[1, 0, 0, 0, 0, 0, 0, 0],
// ];
console.log(bitMarch(2));

// [
// 	[0, 0, 0, 0, 0, 0, 1, 1],
// 	[0, 0, 0, 0, 0, 1, 1, 0],
// 	[0, 0, 0, 0, 1, 1, 0, 0],
// 	[0, 0, 0, 1, 1, 0, 0, 0],
// 	[0, 0, 1, 1, 0, 0, 0, 0],
// 	[0, 1, 1, 0, 0, 0, 0, 0],
// 	[1, 1, 0, 0, 0, 0, 0, 0],
// ];

console.log(bitMarch(3));
