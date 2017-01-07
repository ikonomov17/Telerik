function solve(args) {
        let sideA = +args[0];
        let sideB = +args[1];
        let height = +args[2];

        let area = height * ((sideA + sideB) / 2);

        console.log(area.toFixed(7));
}

solve(['2', '1', '33']);