// Tribonacci Sequence

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

//PREP
//Parameter - signature - [num1, num2, num3] array element will not be - it can be deccimal number , n - limit
//Return = [] of series with length n

function tribonacci(signature, n) {
	//your code here
	//ans = []
	//loop to n
	//if(i < 3) ans.push(sig[i])
	//else let temp = ans[n] + ans[n-1] + ans[n-2] ans.append(temp)

	let ans = [];
	for (let index = 0; index < n; index++) {
		if (index < 3) {
			ans.push(signature[index]);
		} else {
			let tempN = ans.length - 1;
			let temp = ans[tempN] + ans[tempN - 1] + ans[tempN - 2];
			ans.push(temp);
		}
	}
	return ans;

	//Optimize code
	// for (var i = 0; i < n - 3; i++) {
	// 	// iterate n times
	// 	signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
	// }
	// return signature.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10)); //1,1,1,3, 5, 9,17,31,57,105
console.log(tribonacci([0, 0, 1], 10)); // 0,0,1,1,2,4,7,13,24,44
console.log(tribonacci([0, 0, 0], 10)); // 0,0,0,0,0,0,0,0,0,0
console.log(tribonacci([1, 1, 1], 1)); //[1]
console.log(tribonacci([100, 200, 300], 0)); //[]
