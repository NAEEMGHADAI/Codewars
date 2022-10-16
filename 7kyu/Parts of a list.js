// Parts of a list
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
//Parameter: array of strings
// return: array of array of length 2 with diffrent combinations

function partlist(arr) {
	let ans = [];
	for (let index = 0; index < arr.length - 1; index++) {
		let temp = [];
		let tempStr = "";
		for (let i = 0; i < index + 1; i++) {
			if (tempStr === "") {
				tempStr += arr[i];
			} else {
				tempStr = tempStr + " " + arr[i];
			}
		}
		temp.push(tempStr);
		tempStr = "";
		for (let i = index + 1; i < arr.length; i++) {
			if (tempStr === "") {
				tempStr += arr[i];
			} else {
				tempStr = tempStr + " " + arr[i];
			}
		}
		temp.push(tempStr);
		ans.push(temp);
	}
	return ans;
}
console.log(partlist(["I", "wish", "I", "hadn't", "come"])); // [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])); // [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])); //[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]
