// Count the photos!

//Parameter: string with "<",">","."

// return the total number of photos.
// it should return an integer
function countPhotos(road) {
	let c = 0;
	let i = [];
	let temp = [];
	for (let index = 0; index < road.length; index++) {
		if (road[index] === ">") {
			c += 1;
		}
		if (road[index] === ".") {
			// console.log("Before .", temp);
			temp.push(c);
			i.push(index);
		}
	}
	// console.log(temp, i);

	for (let k = 0; k < i.length; k++) {
		let temp2 = 0;
		for (let j = i[k]; j < road.length; j++) {
			if (road[j] === "<") {
				temp2++;
			}
		}
		temp[k] += temp2;
	}

	// console.log(temp);
	// count = temp + temp2 + count;
	let ans = temp.reduce((prev, i) => {
		return (prev += i);
	}, 0);
	return ans;
}

console.log(countPhotos(">.>..<")); //8
console.log(countPhotos(".><.>>.<<")); //11
console.log(countPhotos(".>>>")); //0
console.log(countPhotos(">..<<.>.<.")); //15
console.log(countPhotos(".<>>..><.<<<<<.")); //34
console.log(countPhotos("<..>>..>>.><.<.><..<")); //57
console.log(countPhotos("<<.")); //0
console.log(countPhotos(">>>.<<<")); //6
console.log(countPhotos("..")); //0
console.log(countPhotos(">>><<<")); //0
console.log(countPhotos("..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.")); //248
