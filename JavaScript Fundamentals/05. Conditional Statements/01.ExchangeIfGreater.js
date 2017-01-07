function solve(args) {
        let first = +args[0];
        let second = +args[1];

        if(first > second){
               let temp = first;
               first = second;
               second = temp;
        }
        console.log(first + ' ' + second)
}

solve(['5.5', '4.5']);