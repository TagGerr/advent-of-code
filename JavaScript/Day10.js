(function(){
    "use strict";

    require("fs").readFile("../inputs/Day10.txt", "utf8", function(err, data){
        if(err){
            console.log(`Unable to load file: ${err}`);
        } else {
            let number = data, lookAndSay = num => number.match(/(\d)\1*/g).map(n => n.length + n[0]).join('');

            for(var i = 0; i < 40; i++){
                number = lookAndSay(number);
            }

            let after40 = number.length;

            for(let i = 0; i < 10; i++){
                number = lookAndSay(number);
            }

            let after50 = number.length;

            console.log(`Part 1: ${after40}`);
            console.log(`Part 2: ${after50}`);
        }
    });
})();