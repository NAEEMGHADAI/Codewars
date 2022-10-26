// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Parameter: array
//Return: array with zeros at the end

function moveZeros(arr) {
	let countZero = 0;
	let ans = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			countZero++;
		} else {
			ans.push(arr[i]);
		}
	}
	for (let i = 1; i <= countZero; i++) {
		ans.push(0);
	}
	return ans;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); //[false, 1, 1, 2, 1, 3, "a", 0, 0]
console.log(
	moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
);
