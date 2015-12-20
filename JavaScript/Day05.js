(function(){
	"use strict";

	require("fs").readFile("../inputs/Day05.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {

			let threeVowels = /[aeiou].*?[aeiou].*?[aeiou]/,
				doubledLetter = /([a-z])\1/,
				badSequences = /(ab|cd|pq|xy)/,
				doubledPair = /([a-z]{2}).*?\1/,
				splitDouble = /([a-z]).\1/,
				countWords = (t, w) => { return t + 1 };

			let words = data.split("\n");

			let nice1 = words.filter(w => {
				return w.match(threeVowels) && w.match(doubledLetter) && !w.match(badSequences);
			}).reduce(countWords, 0);

			let nice2 = words.filter(w => {
				return w.match(doubledPair) && w.match(splitDouble);
			}).reduce(countWords, 0);

			console.log(`Part 1: ${nice1}`);
			console.log(`Part 2: ${nice2}`);
		}
	});
})();