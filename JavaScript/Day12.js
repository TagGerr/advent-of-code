(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day12.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			data = JSON.parse(data);
			let allNumbers = countNumbers(data);
			let noRedNumbers = countNumbers(data, true);

			console.log(`Part 1: ${allNumbers}`);
			console.log(`Part 2: ${noRedNumbers}`);
		}
	});

	let countNumbers = function(object, skipReds){
		skipReds = skipReds || false;

		if(skipReds && typeof object === 'object' && !Array.isArray(object)){
			for(let k in object){
				if(object[k] === 'red'){
					return 0;
				}
			}
		}
		
		let total = 0;
		for(let key in object){
			if(typeof object[key] === 'object'){
				total += countNumbers(object[key], skipReds);
			} else if(typeof object[key] == 'number'){
				total += object[key];
			}
		}
		return total;
	}
})();