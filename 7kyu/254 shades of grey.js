// 254 shades of grey
//Parameter: number ranging from -ve to 254
//return: array of strings with different shades

// Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// Examples:

// n =  1:    ["#010101"]
// n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
// As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

// Black: #000000 and white: #ffffff are not accepted values.

// When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

// Have fun!

function shadesOfGrey(n) {
	if (n <= 0) {
		return [];
	}
	let ans = [];
	for (let i = 1; i <= Math.min(n, 254); i++) {
		if (i < 10) {
			ans.push(`#0${i}0${i}0${i}`);
		} else {
			let grey = ("0" + i.toString(16)).slice(-2);
			ans.push("#" + grey + grey + grey);
		}
	}

	return ans;
}
console.log(shadesOfGrey(-2)); // []
console.log(shadesOfGrey(-1)); // []
console.log(shadesOfGrey(0)); // []
console.log(shadesOfGrey(1)); // ["#010101"]
console.log(shadesOfGrey(2)); // ["#010101", "#020202"]
console.log(shadesOfGrey(3)); // ["#010101","#020202", "#030303"]
console.log(shadesOfGrey(4)); // ["#010101", "#020202", "#030303", "#040404"]
console.log(shadesOfGrey(5));
console.log(shadesOfGrey(6));
console.log(shadesOfGrey(7));
console.log(shadesOfGrey(8));
console.log(shadesOfGrey(9));
console.log(shadesOfGrey(21));
