function solve(args) {
        let first = +args[0];
        let second = +args[1];
        let third = +args[2];
        let fourth = +args[3];
        let fifth = +args[4];

        let biggest = first;

        if(second > biggest) {
                biggest = second;
        }
        if(third > biggest) {
                biggest = third;
        }
        if (fourth > biggest) {
                biggest = fourth;
        }
        if (fifth > biggest) {
                biggest = fifth;
        }
        console.log(biggest);
}

solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);