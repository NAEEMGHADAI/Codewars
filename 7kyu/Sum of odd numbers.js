// Sum of odd numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
//Parameter: number which will denote line number in the odd numbers pyramid
//return: sum of odd number on that line
function rowSumOddNumbers(n) {
	return n * n * n;
}

console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(5)); //125

console.log(rowSumOddNumbers(42)); //74088
