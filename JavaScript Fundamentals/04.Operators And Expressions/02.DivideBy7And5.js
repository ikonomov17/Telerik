function solve (args){
        
        var inputNumber = +args[0];

        // Checks if the input number can be divided by 5 and 7
        
        if(inputNumber % 5 === 0 && inputNumber % 7 === 0) {
                console.log('true '+ inputNumber);
        }
        else {
                console.log('false ' + inputNumber);
        }
}

solve(['140'])