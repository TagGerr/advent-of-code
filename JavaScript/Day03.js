(function(){
	"use strict";
	
	require("fs").readFile("../inputs/Day03.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let single = {'0,0': 1}, both = {santa: {'0,0': 1}, robot: {'0,0': 1}};
			let santa1 = {x: 0, y: 0}, santa2 = {x: 0, y: 0}, robot = {x: 0, y: 0};
			data.split("").map((move, index) => {
				addHouse(single, santa1 = handleMove(move, santa1));

				if(index % 2 == 0){
					addHouse(both.santa, santa2 = handleMove(move, santa2));
				} else {
					addHouse(both.robot, robot = handleMove(move, robot));
				}
			});
			console.log(`Part 1: ${Object.keys(single).length}`);
			console.log(`Part 2: ${Object.keys(Object.assign({}, both.santa, both.robot)).length}`);
		}
	});

	let handleMove = function(direction, position) {
		switch(direction){
			case '^':
				position.y++;
				break;

			case 'v':
				position.y--;
				break;

			case '>':
				position.x++;
				break;

			case '<':
				position.x--;
				break;
		}
		return position;
	};

	let addHouse = function(houses, house) {
		let key = house.x + "," + house.y;
		houses[ key ] = (houses[ key ] || 0) + 1;
		return houses;
	};
})();