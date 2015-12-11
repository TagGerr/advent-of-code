(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day02.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let paper = 0, ribbon = 0;
			data.split("\n").map(line => {
				let parts = line.split('x').map(n => parseInt(n)).sort((a,b) => a - b), length = parts[0], width = parts[1], height = parts[2];
				paper += (3 * length * width) + (2 * width * height) + (2 * length * height);
				ribbon += (2 * length) + (2 * width) + (length * width * height);
			});
			console.log(`Part 1: ${paper}`);
			console.log(`Part 2: ${ribbon}`);
		}
	});
})();