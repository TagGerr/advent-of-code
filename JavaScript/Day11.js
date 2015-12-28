(function(){
    "use strict";

    require("fs").readFile("../inputs/Day11.txt", "utf8", function(err, data){
        if(err){
            console.log(`Unable to load file: ${err}`);
        } else {
            let firstPassword = findNextPassword(data);
            let secondPassword = findNextPassword(firstPassword);

            console.log(`Part 1: ${firstPassword}`);
            console.log(`Part 2: ${secondPassword}`);
        }
    });

    let findNextPassword = function(password) {
        let disallowedLetters = /[iol]/,
            doubledLetters = /([a-z])\1.*([a-z])\2/;

        while(true){
            password = (parseInt(password, 36) + 1).toString(36).replace(/0/, 'a');
            if(password.match(doubledLetters) && !password.match(disallowedLetters)){
                let consecutiveLetters = false;
                for(let c = 0; c < password.length - 2; c++){
                    let l1 = password.charCodeAt(c),
                        l2 = password.charCodeAt(c + 1),
                        l3 = password.charCodeAt(c + 2);
                    if(l1 == l2 - 1 && l2 == l3 - 1){
                        return password;
                    }
                }
            }
        }
    };
})();