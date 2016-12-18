function solve(args) {
    // your code goes here
    var input = +args[0];
    if(input % 2 === 0)
    {
        console.log('even '+ input);
    }
    else{
        console.log('odd ' + input );
    }
    
}

solve(['0']);