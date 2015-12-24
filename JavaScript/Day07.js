(function(){
	"use strict";

	require("fs").readFile("../inputs/Day07.txt", "utf8", function(err, data){
		if(err){
			console.log(`Unable to load file: ${err}`);
		} else {
			let wires = {};

			class Wire {

				constructor(instruction) {
					this.ops = {
						'AND'	 : '&',
						'OR'	 : '|',
						'RSHIFT' : '>>',
						'LSHIFT' : '<<'
					};

					this.calculate = this.getCalculateMethod(instruction);
				}

				getCalculateMethod(instruction) {
					let assignMatch, opMatch;
					if(assignMatch = /^(NOT )?(\d+|[a-z]+)$/.exec(instruction)){
						return function() {
							let value = this.parseValue(assignMatch[2]);
							if(assignMatch[1]){
								value = ~ value;
							}
							return value;
						}
					} else if(opMatch = /^([a-z]+|\d+) ([A-Z]+) ([a-z]+|\d+)$/.exec(instruction)){
						let opCode = this.ops[ opMatch[2] ];
						return function() {
							return eval(this.parseValue(opMatch[1]) + ' ' + opCode + ' ' + this.parseValue(opMatch[3]));
						}
					}
				}

				parseValue(key) {
					let newInt = parseInt(key);
					return !isNaN(newInt) ? newInt : wires[key].getValue();
				}

				getValue() {
					if(typeof this.value === 'undefined'){
						this.value = this.checkRange(this.calculate());
					}
					return this.value;
				}

				checkRange(number) {
					let maxNum = 65536;
					return ((number % maxNum) + maxNum) % maxNum;
				}
			};

			data.split("\n").forEach(item => {
				let match;
				if(match = /(.*?) -> ([a-z]+)/.exec(item)){
					wires[ match[2] ] = new Wire(match[1]);
				}
			});

			let firstA = wires.a.getValue();

			Object.keys(wires).forEach(key => {
				wires[ key ].value = undefined;
			});
			wires.b.value = firstA;
			let secondA = wires.a.getValue();

			console.log(`Part 1: ${firstA}`);
			console.log(`Part 2: ${secondA}`);
		}
	});
})();