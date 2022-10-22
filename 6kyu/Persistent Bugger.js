// Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//Parameter: number
//Return: number (count steps needed to reach single digit)
function persistence(num) {
	if (String(num).length === 1) {
		return 0;
	}
	let ans = 0;

	let numStr = String(num);
	while (numStr.length !== 1) {
		let temp = 1;
		for (let i = 0; i < numStr.length; i++) {
			temp *= +numStr[i];
		}
		numStr = String(temp);
		ans++;
	}
	return ans;
}

console.log(persistence(39)); //3
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(999)); //4
