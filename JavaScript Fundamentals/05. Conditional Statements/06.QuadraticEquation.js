function solve(args) {
        let a = +args[0];
        let b = +args[1];
        let c = +args[2];

        let D = (Math.pow(b,2)) - (4*a*c);

        if(D < 0){
                console.log('no real roots');
                return;
        } 
        else if( D === 0) {
                let x = -b / (2*a);
                console.log('x1=x2='+ x.toFixed(2));
                return;
        }
        else {
                let x1 = ( -b + Math.sqrt(D)) / (2 * a);
                let x2 = (- b - Math.sqrt(D) ) / (2 * a);
                if (x1 > x2)
                {
                        console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
                        return;
                }
                console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
                return;
        }
}

solve(['0.2', '9.572', '0.2']);