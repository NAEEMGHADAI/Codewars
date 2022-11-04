// N-th Fibonacci

// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

//Parameter: number
//Return: number

function nthFibo(n) {
	// Return the n-th number in the Fibonacci Sequence
	if (n == 0) {
		return 0;
	}
	let ans = [0, 1];
	let i = 0;
	while (i < n) {
		let len = ans.length;
		// console.log(ans[len - 1], ans[len - 2]);
		let temp = ans[len - 1] + ans[len - 2];
		ans.push(temp);
		i++;
	}
	console.log(ans);
	return ans[n - 1];
}

console.log(nthFibo(1)); //0
console.log(nthFibo(2)); //1
console.log(nthFibo(3)); //1
console.log(nthFibo(4)); //2
console.log(nthFibo(0)); //0
