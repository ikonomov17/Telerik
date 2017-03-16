function solve(args) {
    
    var inputNumber = +args[0];
    
    //This output format will not work in BGCODER
    
    if(inputNumber % 2 === 0) {
        console.log(inputNumber + ' is even.');
    }
    else {
        console.log(inputNumber + ' is odd.');
    }
    
}

solve(['2']);