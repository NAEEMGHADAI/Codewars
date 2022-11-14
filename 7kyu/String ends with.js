// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
	let j = ending.length - 1;
	if (str.length < ending.length) {
		return false;
	}
	for (let i = str.length - 1; i >= 0; i--) {
		if (j !== -1) {
			if (str[i] !== ending[j]) {
				return false;
			}
			j--;
		}
	}
	return true;
}
console.log(solution("abcde", "cde")); //true
console.log(solution("abcde", "abc")); //false
