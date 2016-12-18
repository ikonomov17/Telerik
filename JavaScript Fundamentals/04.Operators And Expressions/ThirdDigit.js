function solve(params) {
        var input = +params[0];
        input = input / 100;
        var thirdDigit = input % 10;
        thirdDigit = thirdDigit | 0;
        if (thirdDigit === 7)
        {
                console.log('true');
        }
        else{
                console.log('false ' + thirdDigit );
        }
}

solve(['9999799']);