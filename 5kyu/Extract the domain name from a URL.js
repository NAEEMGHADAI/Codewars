// Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
//Parameter: String with url
//Return: URL domain name

function domainName(url) {
	let ans = "";
	let i = 0;
	if (url.includes("http")) {
		if (url.includes("https")) {
			i += 8;
		} else {
			i += 7;
		}
		if (url.includes("www")) {
			i += 4;
		}
	} else if (url.includes("www")) {
		i = 4;
	}
	ans = whileLoop(i, url);
	return ans;
}

function whileLoop(i, url) {
	let ans = "";
	while (url[i] !== ".") {
		ans += url[i];
		i++;
	}
	return ans;
}

console.log(domainName("http://google.com")); //google
console.log(domainName("http://google.co.jp")); //google
console.log(domainName("www.xakep.ru")); //xakep
console.log(domainName("https://youtube.com")); //youtube
console.log(domainName("http://github.com/carbonfive/raygun")); //github
console.log(domainName("http://www.zombie-bites.com")); //zombie-bites
console.log(domainName("https://www.cnet.com")); //cnet
