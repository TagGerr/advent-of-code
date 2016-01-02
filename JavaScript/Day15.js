(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day15.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let limit = 100,
				bestScore = 0,
				bestCalories = 0;

			let ingredients = data.split('\n').map(l => {
				let parts = l.match(/(^\w+|\-?\d+)/g),
					ingredient = {
						name: parts[0],
						capacity: parseInt(parts[1]),
						durability: parseInt(parts[2]),
						flavor: parseInt(parts[3]),
						texture: parseInt(parts[4]),
						calories: parseInt(parts[5])
					};
				return ingredient;
			});

			for(let a = 0; a <= limit; a++){
				for(let b = 0; b <= limit - a; b++){
					for(let c = 0; c <= limit - a - b; c++){
						let d = limit - a - b - c;
						let capacity = Math.max(0, ingredients[0].capacity * a + ingredients[1].capacity * b + ingredients[2].capacity * c + ingredients[3].capacity * d);
						let durability = Math.max(0, ingredients[0].durability * a + ingredients[1].durability * b + ingredients[2].durability * c + ingredients[3].durability * d);
						let flavor = Math.max(0, ingredients[0].flavor * a + ingredients[1].flavor * b + ingredients[2].flavor * c + ingredients[3].flavor * d);
						let texture = Math.max(0, ingredients[0].texture * a + ingredients[1].texture * b + ingredients[2].texture * c + ingredients[3].texture * d);
						let calories = ingredients[0].calories * a + ingredients[1].calories * b + ingredients[2].calories * c + ingredients[3].calories * d;

						let score = capacity * durability * flavor * texture;

						bestScore = Math.max(bestScore, score);
						if(calories === 500){
							bestCalories = Math.max(bestCalories, score);
						}
					}
				}
			}

			console.log(`Part 1: ${bestScore}`);
			console.log(`Part 2: ${bestCalories}`);
		}
	});
})();