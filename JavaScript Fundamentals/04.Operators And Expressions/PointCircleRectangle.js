function solve(args) {
        let x = +args[0];
        let y = +args[1];
        
        let circleDistance = Math.sqrt(Math.pow((x - 1),2) + Math.pow((y - 1),2));
        circleDistance = Math.round(circleDistance*100)/100;

        let circleStatus;
        if(circleDistance <= 1.50){
                circleStatus = 'inside circle';
        }
        else {
                circleStatus = 'outside circle'; 
        }

        let rectangleStatus;
        if((-1 <= x && x <= 5) && (-1 <= y && y <= 1)){
                rectangleStatus = 'inside rectangle';
        }
        else {
                rectangleStatus = 'outside rectangle';
        }
        
        console.log(circleStatus + ' ' + rectangleStatus);
}

solve(['1', '2']);