function solve(args) {
        let number = +args[0];
        let result = 1;
        for (let index = 2; index <= number; index += 1) {
                if(index === number) {
                        result += ' ' + index;
                        continue;
                }
                result += ' ' + index;
        }        
        console.log(result);
}

solve(['11']);