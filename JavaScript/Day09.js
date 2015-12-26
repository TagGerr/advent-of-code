(function(){
	"use strict";

	require("fs").readFile("../inputs/Day09.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let locations = new Set(), distances = {};

			data.split("\n").map(l => {
				let parts = l.match(/^(\w+) to (\w+) = (\d+)$/i), source = parts[1], dest = parts[2], distance = parseInt(parts[3]);
				
				locations.add(source);
				locations.add(dest);

				if(typeof distances[source] == 'undefined'){
					distances[source] = {};
				}
				distances[source][dest] = distance;

				if(typeof distances[dest] == 'undefined'){
					distances[dest] = {};
				}
				distances[dest][source] = distance;
			});

			let allDistances = permute(Array.from(locations)).map(p => {
				let totalDistance = 0;
				for(let c = 1; c < p.length; c++){
					totalDistance += distances[ p[ c - 1 ] ][ p[c] ];
				}
				return totalDistance;
			});

			console.log(`Part 1: ${Math.min.apply(null, allDistances)}`);
			console.log(`Part 2: ${Math.max.apply(null, allDistances)}`);
		}
	});

	let permute = function(list) {
		if(list.length === 0){
			return [[]];
		}

		let permutations = [];
		for(let l = 0; l < list.length; l++){
			let copy = Object.create(list);
			let head = copy.splice(l, 1);
			let remaining = permute(copy);
			for(let tail of remaining){
				permutations.push(head.concat(tail));
			}
		}
		return permutations;
	};
})();