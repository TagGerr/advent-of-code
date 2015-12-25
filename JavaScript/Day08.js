(function(){
	"use strict";

	require("fs").readFile("../inputs/Day08.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let strings = data.split("\n");
			let countLengths = (a, b) => a + b;
			let totalLength = strings.map(s => s.length).reduce(countLengths);
			let evalLength = strings.map(s => eval(s).length).reduce(countLengths);
			let expandedLength = strings.map(s => ('"' + s.replace(/[\\"]/g, '\\$&') + '"').length).reduce(countLengths);

			console.log(`Part 1: ${totalLength - evalLength}`);
			console.log(`Part 2: ${expandedLength - totalLength}`);
		}
	});
})();