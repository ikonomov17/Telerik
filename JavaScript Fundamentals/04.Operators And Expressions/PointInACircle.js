function solve(args) {
        let x = +args[0];
        let y = +args[1];
        let distance = Math.sqrt(Math.pow((x - 0),2) + Math.pow((y - 0),2));
        distance = Math.round(distance*100)/100;
    
        if(distance <= 2.00){
                 console.log('yes ' + distance.toFixed(2));
        }
        else {
                console.log('no ' + distance.toFixed(2));
        }
       
}
//Circle's coordinates are K({0, 0}, 2)
solve(['100', '-30']);