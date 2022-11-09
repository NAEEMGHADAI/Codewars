// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
	let countObj = {};
	for (let i = 0; i < arr.length; i++) {
		if (!countObj[arr[i]]) {
			countObj[arr[i]] = 1;
		} else {
			countObj[arr[i]]++;
		}
	}
	console.log(countObj);
	let max = 0;
	for (const key in countObj) {
		if (countObj[key] > max) {
			max = countObj[key];
		}
	}
	let ans = [];
	for (const key in countObj) {
		if (countObj[key] === max) {
			ans.push(+key);
		}
	}
	return Math.max(...ans);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); //12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); //3
