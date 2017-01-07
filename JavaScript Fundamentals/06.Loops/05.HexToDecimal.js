function solve(args) {
        let hexadecimal = '0123456789ABCDEF';
        let hexNumber = new String(args);
        
        let hexLength = hexNumber.length;
        let decimalNumber = 0;
        for(let i = hexLength -1,power = 0; i >= 0; i -= 1, power += 1) {
                let current = hexadecimal.indexOf(hexNumber[i]);
                decimalNumber += current * Math.pow(16,power);
        }
        console.log(decimalNumber)
}

solve(['4ED528CBB4']);