(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day13.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let people = [], happiness = {};

			data.split('\n').map(l => {
				let parts = l.match(/([a-z]+) would (gain|lose) ([0-9]+) happiness units by sitting next to ([a-z]+)\./i), person = parts[1], amount = (parts[2] == 'gain' ? 1 : -1) * parts[3], neighbor = parts[4];
				if(people.indexOf(person) === -1){
					people.push(person);
				}
				if(typeof happiness[person] === 'undefined'){
					happiness[person] = {};
				}
				happiness[person][neighbor] = amount;
			});

			let originalBest = findBestArrangement(people, happiness);
			
			happiness['self'] = {};
			for(let person of people){
				happiness[person]['self'] = 0;
				happiness['self'][person] = 0;
			}
			people.push('self');

			let includingMeBest = findBestArrangement(people, happiness);

			console.log(`Part 1: ${originalBest}`);
			console.log(`Part 2: ${includingMeBest}`);
		}
	});

	let findBestArrangement = function(people, happiness) {
		let best = 0;
		let arrangements = permute(people);
		for(let seating of arrangements){
			let total = 0, seatCount = seating.length;
			for(let s = 0; s < seatCount; s++){
				let left = s - 1;
				if(left < 0){
					left = seatCount - 1;
				}

				let right = s + 1;
				if(right >= seatCount){
					right = 0;
				}

				total += happiness[ seating[s] ][ seating[left] ] + happiness[ seating[s] ][ seating[right] ];
			}
			best = Math.max(total, best);
		}
		return best;
	}

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