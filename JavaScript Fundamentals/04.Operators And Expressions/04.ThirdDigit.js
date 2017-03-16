function solve(params) {
        var inputNumber = +params[0];

        // Divide by 100 to get the third digit to the last position
        inputNumber = inputNumber / 100;
        // Store the third digit which is now on last position
        var thirdDigit = inputNumber % 10;
        // Round the number
        thirdDigit = thirdDigit | 0;
        
        if (thirdDigit === 7){
                console.log('true');
        }
        else{
                console.log('false ' + thirdDigit );
        }
}

solve(['3213723']);