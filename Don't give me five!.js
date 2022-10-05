// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end) {
	let ans = [];
	for (let index = start; index < end + 1; index++) {
		let ind = index.toString();
		if (!ind.includes("5")) {
			ans.push(index);
		}
		// if (index % 5 !== 0) {
		// 	ans.push(index);
		// } else {
		// 	if (index % 10 === 0) {
		// 		ans.push(index);
		// 	}
		// }
	}
	console.log(ans);
	return ans.length;
}
console.log(dontGiveMeFive(4, 17));
