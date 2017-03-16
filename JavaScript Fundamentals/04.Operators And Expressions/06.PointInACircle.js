function solve(args) {
        let xCoord = +args[0];
        let yCoord = +args[1];

        let distance = Math.sqrt(Math.pow((xCoord - 0),2) + Math.pow((yCoord - 0),2));
        distance = Math.round(distance * 100) / 100;
    
        if(distance <= 2.00) {
                 console.log('yes ' + distance.toFixed(2));
        }
        else {
                console.log('no ' + distance.toFixed(2));
        }
       
}
//Circle's coordinates are K({0, 0}, 2)
solve(['100', '-30']);  // answer no 104.40
solve(['-2', '0'])  // answer yes 2.00
solve(['-1', '2'])  // answer no 2.24
solve(['1.5', '-1'])  // answer yes 1.80
solve(['-1.5', '-1.5']) // answer no 2.12
solve(['0', '0'])  // answer yes 0.00