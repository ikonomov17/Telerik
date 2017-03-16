function solve(args) {
        let sideA = +args[0];
        let sideB = +args[1];
        let height = +args[2];

        let area = height * ((sideA + sideB) / 2);

        console.log(area.toFixed(7));
}

solve(['2', '1', '33']);   // answer 49.5000000
solve(['5', '7', '12']);   // answer 72.0000000
solve(['8.5', '4.3', '2.7'])   // answer 17.2800000