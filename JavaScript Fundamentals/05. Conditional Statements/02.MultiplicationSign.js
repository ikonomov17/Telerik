function solve(args) {
        let first = +args[0];
        let second = +args[1];
        let third = +args[2];

        if(first === 0 || second === 0 || third === 0) {
                console.log('0');
                return;
        }
        let isPositive = 0;
        if(first > 0)
                isPositive += 1;
        if(second > 0)
                isPositive += 1;
        if(third > 0) 
                isPositive += 1;
        
        if(isPositive === 0 || isPositive === 2) {
                console.log('-');
        }
        else if (isPositive === 1 || isPositive === 3) {
                console.log('+');
        }
        
}

solve(['-1', '-0.5', '-5.1']);