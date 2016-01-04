(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day17.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let containers = data.split('\n').map(n => parseInt(n)),
				eggnog = 150;

			let validCombos = powerSets(containers).filter(s => s.reduce((a,b) => a + b, 0) === eggnog);
			let minContainers = Math.min.apply(null, validCombos.map(a => a.length));
			let smallCombos = validCombos.filter(s => s.length == minContainers);

			console.log(`Part 1: ${validCombos.length}`);
			console.log(`Part 2: ${smallCombos.length}`);
		}
	});

	let powerSets = function(options) {
		let set = [],
			size = options.length,
			count = (1 << size);

		for(let i = 1; i < count; i++){
			let combo = [];
			for(let j = 0; j < size; j++){
				if(i & (1 << j)){
					combo.push(options[j]);
				}
			}
			set.push(combo);
		}
		return set;
	};
})();