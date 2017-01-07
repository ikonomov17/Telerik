function solve(args) {
        let number = +args[0];
        let wordNumber;

        let upToTwenty = ['zero','one','two','three','four','five','six','seven','eight','nine',
                          'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen',
                          'nineteen'];
        let upToHundred = ['','','twenty','thirty','fourty', 'fifty','sixty','seventy','eighty','ninety']
        
        if(0 <= number && number < 20) {
                wordNumber = upToTwenty[number];
                console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                return;
        }
        else if(20 <= number && number <= 99)
        {
                if(number % 10 === 0) {
                        wordNumber = upToHundred[((number/10) | 0 )];
                        console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                        return;
                }
                wordNumber = upToHundred[((number/10) | 0 )] + ' ' + upToTwenty[number % 10];
                console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                return;
        }
        else if(100 <= number && number <= 999) {
                if(number % 100 === 0) {
                        wordNumber = upToTwenty[number/100 | 0] + ' hundred';
                        console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                        return;
                }
                else if(number % 10 === 0) {
                        if(number % 100 > 10) {
                                wordNumber = upToTwenty[number/100 | 0] + ' hundred and ' + upToHundred[number % 100 / 10];
                                console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                                return;   
                        }
                         wordNumber = upToTwenty[number/100 | 0] + ' hundred and ' + upToTwenty[number % 100];
                         console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                         return;
                }
                if(number % 100 < 20) {
                        wordNumber = upToTwenty[number/100 | 0] + ' hundred and ' + upToTwenty[number % 100];
                        console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                        return;
                }
                wordNumber = upToTwenty[number/100 | 0] + ' hundred and ' + upToHundred[((number / 10) | 0 ) % 10] + ' ' + upToTwenty[number % 10];
                console.log(wordNumber.charAt(0).toUpperCase() + wordNumber.slice(1));
                
        }
}

solve(['912']);