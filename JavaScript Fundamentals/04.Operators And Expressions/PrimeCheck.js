function solve(args) {
        let checkNumber = +args[0];

        if (2 <= checkNumber && checkNumber <= 100)
            {
                if ((checkNumber === 2) || (checkNumber === 3) || (checkNumber === 5) || (checkNumber === 7))
                {
                    console.log('true');
                }
                else 
                {
                    if ((checkNumber % 2 != 0) && (checkNumber % 3 != 0) && (checkNumber % 5 != 0) && (checkNumber % 7 != 0))
                    {
                        console.log('true');
                    }
                    else
                    {
                        console.log('false');
                    }
                }
            }
            else
            {
                console.log('false');
            }

}

solve(['23']);