// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
	let ans = [];
	for (let index = 0; index < str.length; index += 2) {
		if (index + 1 === str.length) {
			let temp = "";
			temp = temp + str[index] + "_";
			ans.push(temp);
		} else {
			let temp = "";
			temp = temp + str[index] + str[index + 1];
			ans.push(temp);
		}
	}
	return ans;
}

console.log(solution("abcde"));
