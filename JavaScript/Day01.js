(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day01.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let basementPosition = 0;

			let floor = data.split('').reduce((s, v, i) => {
				if(s === -1 && basementPosition === 0){
					basementPosition = i;
				}
				return s + ((v == "(") ? 1 : -1);
			}, 0);

			console.log(`Part 1: ${floor}`);
			console.log(`Part 2: ${basementPosition}`);
		}
	});
})();