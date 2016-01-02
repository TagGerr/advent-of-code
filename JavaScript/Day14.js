(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day14.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let timeLimit = 2503,
				scores = [],
				maxDistance = 0,
				mostPoints = 0;

			let reindeer = data.split('\n').map(l => {
				let parts = l.match(/(^\w+|\d+)/g),
					reindeer = {
						name: parts[0],
						speed: parseInt(parts[1]),
						flyTime: parseInt(parts[2]),
						restTime: parseInt(parts[3]),
						totalTime: parseInt(parts[2]) + parseInt(parts[3])
					};
				scores.push(0);
				return reindeer;
			});

			for(let s = 1; s <= timeLimit; s++){
				let distances = reindeer.map(r => {
					return r.speed * (Math.floor(s / r.totalTime) * r.flyTime + Math.min(s % r.totalTime, r.flyTime));
				});
				maxDistance = Math.max.apply(null, distances);
				distances.reduce((l, d, i) => {
					if(d === maxDistance){
						l.push(i);
					}
					return l;
				}, []).forEach(v => {
					scores[v] += 1;
				});
			}
			mostPoints = Math.max.apply(null, scores);

			console.log(`Part 1: ${maxDistance}`);
			console.log(`Part 2: ${mostPoints}`);
		}
	});
})();