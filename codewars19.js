// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
	let rem = "like this";
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	}
	let ans = "";
	if (names.length <= 3) {
		for (let index = 0; index < names.length; index++) {
			if (index === names.length - 1) {
				ans += `and ${names[index]} ` + rem;
			} else if (names.length === 2 || index === names.length - 2) {
				ans += `${names[index]} `;
			} else {
				ans += `${names[index]}, `;
			}
		}
	} else {
		ans += `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
	return ans;
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
