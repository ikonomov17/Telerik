function solve (args){
        var input = +args[(0)];
        if(input % 7 === 0 && input % 5 === 0){
                console.log('true '+ input);
        }
        else {
                console.log('false ' + input);
        }
}

solve(['140'])