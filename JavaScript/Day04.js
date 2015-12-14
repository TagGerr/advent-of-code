(function(){
	"use strict";

	let crypto = require('crypto');
	require("fs").readFile("../inputs/Day04.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let fiveZerosString = '', sixZerosString = '', num = 1;

			while(fiveZerosString === '' || sixZerosString === ''){

				let hash = crypto.createHash('md5').update(data + num, 'ascii').digest('hex');

				if(fiveZerosString === '' && hash.substr(0, 5) === '00000'){
					fiveZerosString = num;
				}

				if(sixZerosString === '' && hash.substr(0, 6) === '000000'){
					sixZerosString = num;
				}

				num++;
			}

			console.log(`Part 1: ${fiveZerosString}`);
			console.log(`Part 2: ${sixZerosString}`);
		}
	});
})();