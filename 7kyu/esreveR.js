// esreveR
//parameter: array
//return: reverse array

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

let reverse = function (array) {
	// TODO: program me!
	let j = array.length - 1;
	for (let i = 0; i < array.length / 2; i++) {
		[array[i], array[j - i]] = [array[j - i], array[i]];
	}
	return array;
};
console.log(reverse([1, 2, 3])); //[3,2,1]
console.log(reverse([1, null, 14, "two"])); //["two",14,null,1]
