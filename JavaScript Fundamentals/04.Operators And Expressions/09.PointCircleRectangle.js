function solve(args) {
        // Circle's coordinates by default K({1, 1}, 1.5)
        // Rectangle's coordinates by default R(top=1, left=-1, width=6, height=2)

        let x = +args[0];
        let y = +args[1];
        let circleRadius = 1.50;
        let circleDistance = Math.sqrt(Math.pow((x - 1),2) + Math.pow((y - 1),2));
        circleDistance = Math.round(circleDistance*100)/100;

        let circleStatus;

        if(circleDistance <= circleRadius) {
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

solve(['1', '2']);     // answer : inside circle outside rectangle
solve(['2.5', '2']);   // answer : outside circle outside rectangle
solve(['0', '1']);     // answer : inside circle inside rectangle
solve(['2.5', '1']);   // answer : inside circle inside rectangle