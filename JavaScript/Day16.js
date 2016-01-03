(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day16.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let firstSue = 0,
				secondSue = 0,
				realSue = {
					children: 3,
					cats: 7,
					samoyeds: 2,
					pomeranians: 3,
					akitas: 0,
					vizslas: 0,
					goldfish: 5,
					trees: 3,
					cars: 2,
					perfumes: 1
				};

			data.split('\n').map(l => {
				let parts = l.replace(/[:,]/g, '').split(' '),
					sue = {
						'number': parseInt(parts[1]),
						'compounds': [
							parts[2],
							parts[4],
							parts[6]
						],
						'amounts': [
							parseInt(parts[3]),
							parseInt(parts[5]),
							parseInt(parts[7])
						]
					};
				return sue;
			}).forEach(s => {
				let firstMatch = true,
					secondMatch = true;

				s.compounds.forEach((c, k) => {
					if(firstMatch){
						firstMatch = (realSue[c] === s.amounts[k]);
					}

					if(secondMatch){
						switch(c){
							case 'cats':
							case 'trees':
								secondMatch = (realSue[c] < s.amounts[k]);
								break;

							case 'pomeranians':
							case 'goldfish':
								secondMatch = (realSue[c] > s.amounts[k]);
								break;

							default:
								secondMatch = (realSue[c] === s.amounts[k]);
								break;
						}
					}
				});

				if(firstMatch && firstSue === 0){
					firstSue = s.number;
				}

				if(secondMatch && secondSue === 0){
					secondSue = s.number;
				}
			});

			console.log(`Part 1: ${firstSue}`);
			console.log(`Part 2: ${secondSue}`);
		}
	});
})();