// Sum of prime-indexed elements

// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

// If you like this Kata, try:

// Dominant primes. It takes this idea a step further.

// Consonant value

//Parameter: array of numbers
//Return: //sum of prime-indexed elements

function total(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (isPrime(i)) {
			// console.log(i);
			sum += arr[i];
		}
	}
	// console.log();
	return sum;
}

function isPrime(num) {
	if (num === 1 || num === 0) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
console.log(total([])); //0
console.log(total([1, 2, 3, 4])); //7
console.log(total([1, 2, 3, 4, 5, 6])); //13
console.log(total([1, 2, 3, 4, 5, 6, 7, 8])); //21
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); //21
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); //33
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //47
