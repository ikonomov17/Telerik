function solve(args) {
        let first = +args[0];
        let second = +args[1];
        let third = +args[2];

        if(first > second) {
                if (first > third) {
                        console.log(first);
                        return;
                }
                else {
                        console.log(third);
                        return;
                }
        }
        else if (second > first) {
                if(second > third){
                        console.log(second);
                        return;
                }
                else {
                        console.log(third);
                        return;
                }
        }
        else if (third > first){
                console.log(third);
                return;
        }
        else if(third < second){
                console.log(second);
                return;
        }
        else if(third === second && second == first)
        {
                console.log(first);
        }
}

solve(['2', '2', '2']);