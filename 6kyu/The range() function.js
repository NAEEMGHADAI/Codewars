// The range() function
// Let's implement the range function:

// range([start], stop, [step])

// range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(1, 4, 0); // /!\ note that the step is 0
// => [1, 1, 1]

// range(0);
// => []

// range(10, 0); // /!\ note that the end is before the start
// => []

// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]
// start, if omitted, defaults to 0; step defaults to 1.

// Returns a list of integers from start to stop, incremented by step, exclusive.

// Note that ranges that stop before they start are considered to be zero-length instead of negative.

//PREP
//Parameter : start can be any number , stop can be any number from 0 - infinity, step can be given or not if given that number of step should be taken
//Return : array of numbers

function range(start, stop, step) {
	let ans = [];
	if (start !== undefined && stop !== undefined) {
		if (step) {
			for (let index = start; index < stop; index += step) {
				ans.push(index);
			}
		} else {
			if (step === 0) {
				for (let index = start; index < stop; index++) {
					ans.push(start);
				}
			} else {
				for (let index = start; index < stop; index++) {
					ans.push(index);
				}
			}
		}
	} else {
		for (let index = 0; index < start; index++) {
			ans.push(index);
		}
	}
	return ans;
}

console.log(range(1, 11)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(1, 4, 0));
// /!\ note that the step is 0
//  [1, 1, 1]

console.log(range(0)); // []

console.log(range(10, 0)); // [] /!\ note that the end is before the start

console.log(range(10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(0, 30, 5)); //[0, 5, 10, 15, 20, 25]
