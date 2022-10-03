// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// ARRAYS FUNDAMENTALS ALGORITHMS

function arrayDiff(a, b) {
	let ans = [];
	if (b.length !== 0) {
		for (let index = 0; index < a.length; index++) {
			let isPresentInB = false;
			for (let index2 = 0; index2 < b.length; index2++) {
				if (a[index] === b[index2]) {
					isPresentInB = true;
				}
			}
			if (!isPresentInB) {
				ans.push(a[index]);
			}
		}

		a = ans;
	}
	return a;
}
console.log(arrayDiff([1, 2, 3], [1, 2]));
