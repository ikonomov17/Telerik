function solve(args) {
        let number = +args[0];
        
        for (let i = 1; i <= number; i+=1) {
                let line = '';
                for (let k = i; k < number+i; k++) {
                        if(k === number+i-1) {
                               line += k; 
                        }
                        else {
                                line += k + ' ';
                        }
                        
                }
                console.log(line)
        }
}
solve(['2']);