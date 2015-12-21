(function(){
	"use strict";

	require("fs").readFile("../inputs/Day06.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {

			let lights = [],
				brights = [],
				countLights = (total, light) => total + light;
			for(let y = 0; y < 1000; y++){
				lights[y] = [];
				for(let x = 0; x < 1000; x++){
					lights[y][x] = 0;
				}
			}
			brights = lights.slice().map(row => row.slice());

			let lineParts = /^(?:turn )?(\w*) (\d*?),(\d*?) through (\d*?),(\d*?)$/;

			data.split("\n").map(inst => {
				let parts = inst.match(lineParts),
					action = parts[1],
					x1 = Number(parts[2]),
					y1 = Number(parts[3]),
					x2 = Number(parts[4]),
					y2 = Number(parts[5]);
				for(let y = y1; y <= y2; y++){
					for(let x = x1; x <= x2; x++){
						switch(action){
							case 'on':
								lights[y][x] = 1;
								brights[y][x] += 1;
								break;

							case 'off':
								lights[y][x] = 0;
								brights[y][x] = Math.max(0, brights[y][x] - 1);
								break;

							case 'toggle':
								lights[y][x] = Math.abs(lights[y][x] - 1);
								brights[y][x] = (brights[y][x] || 0) + 2;
						}
					}
				}
			});

			let lightsOn = lights.map(row => row.reduce(countLights)).reduce(countLights);
			let brightness = brights.map(row => row.reduce(countLights)).reduce(countLights);

			console.log(`Part 1: ${lightsOn}`);
			console.log(`Part 2: ${brightness}`);
		}
	});
})();