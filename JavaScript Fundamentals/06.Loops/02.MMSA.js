function solve(args) {
        let maximum = Number.MIN_SAFE_INTEGER;
        let minimum = Number.MAX_SAFE_INTEGER;
        let sum = 0;
        let avg = 0;
        let count = 0;
        for(let n of args) { 
                if(+n < minimum) {
                        minimum = n;
                } 
                if(+n > maximum) {
                        maximum = n;
                }
                sum += +n;
                count += 1;
        }
        minimum = new Number(minimum);
        console.log('min=' + minimum.toFixed(2));
        maximum = new Number(maximum);
        console.log('max=' + maximum.toFixed(2));
        sum = new Number(sum);
        console.log('sum=' + sum.toFixed(2));
        avg = sum / count;
        console.log('avg=' + avg.toFixed(2));
}
solve(['2', '-1', '4']);