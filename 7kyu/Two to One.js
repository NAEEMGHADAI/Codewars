// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
	let ans = "";
	for (let i = 0; i < s1.length; i++) {
		if (!ans.includes(s1[i])) {
			ans += s1[i];
		}
	}
	for (let i = 0; i < s2.length; i++) {
		if (!ans.includes(s2[i])) {
			ans += s2[i];
		}
	}
	return ans.split("").sort().join("");
}
console.log(longest("aretheyhere", "yestheyarehere")); //"aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); //"acefghilmnoprstuy"
