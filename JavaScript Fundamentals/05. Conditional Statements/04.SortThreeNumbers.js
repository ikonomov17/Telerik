function solve(args) {
        let first = +args[0];
        let second = +args[1];
        let third = +args[2];

        if(first > second) {
                if (first > third) {
                        if (second > third) {
                                console.log(first + ' ' + second + ' ' + third);
                        }
                        else if (second < third){
                                console.log(first + ' ' + third + ' ' + second);
                        }
                        else {
                                console.log(first + ' ' + second + ' ' + third);
                        }
                }
                else  if (first < third) {
                        console.log(third + ' ' + first + ' ' + second);
                }
                else {
                        console.log(first + ' ' + third + ' ' + second);
                }
        }
        else if (second > first) {
                if (second > third) {
                        if (first > third) {
                                console.log(second + ' ' + first + ' ' + third);
                        }
                        else if (third > first) {
                                console.log(second + ' ' + third + ' ' + first); 
                        }
                        else {
                                 console.log(second + ' ' + third + ' ' + first); 
                        }
                }
                else if (second < third) {
                        console.log(third + ' ' + second + ' ' + first);
                }
                else {
                        console.log(second + ' ' + first + ' ' + third);
                }
        }
        else if (third > second) {
                console.log(third + ' ' + first + ' ' + second);
        }
        else if (third > first) {
                console.log(third + ' ' + first + ' ' + second);
        }
        else if (third === second) {
                console.log(third + ' ' + first + ' ' + second);
        }
        else if (third === first) {
                console.log(third + ' ' + first + ' ' + second);
        }

}

solve(['1', '1', '1']);
