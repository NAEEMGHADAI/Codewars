// Basics 03: Strings, Numbers and Calculation
// Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

// So what to do?

// Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

// Easy example:
// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)
// First there are some static tests, later on random tests too...

//Parameter : string: dirty with alphabets as well as numbers and in between there can be a operator
//Return: ans by finding two number and operator

function calculateString(st) {
	let num1 = "";
	let num2 = "";
	let operator = "";
	let i = 0;
	while (st[i] !== "+" && st[i] !== "-" && st[i] !== "*" && st[i] !== "/") {
		if (!isNaN(Number(st[i])) || st[i] === ".") {
			num1 += st[i];
		}
		i++;
	}
	console.log(st[i], num1);
	operator = st[i];
	while (st.length !== i) {
		if (!isNaN(Number(st[i])) || st[i] === ".") {
			num2 += st[i];
		}
		i++;
	}
	console.log(num2);
	let ans = 0;
	switch (operator) {
		case "+":
			ans = +num1 + +num2;
			break;
		case "-":
			ans = +num1 - +num2;
			break;
		case "*":
			ans = +num1 * +num2;
			break;
		case "/":
			ans = +num1 / +num2;
			break;
		default:
			break;
	}
	return Math.round(ans).toString();
}

console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000")); //47
console.log(calculateString("sdfsd23454sdf*2342")); //54929268
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442")); //-210908
console.log(calculateString("fsdfsd234.4554s4234df+sf234442")); //234676
console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c")); //12
