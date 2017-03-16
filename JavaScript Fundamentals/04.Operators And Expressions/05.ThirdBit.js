function solve(args) {
        // Gets a number and outputs the bit at 
        // third position in this number
        var inputNumber = +args[0];

        // We need a mask to make an 'and' bitwise operation
        // 1 in binary is 0000 0001 when shifted three times
        // it looks like 0000 0100 in binary
        var mask = 1 << 3;

        // We need 'and' because the only way to get a 1 is both numbers to be 1 (1 & 1 = 0)
        // All other combinations result 0
        // So if in the first number the bit on third position is 1 in the result it will be 1 too.
        var output = inputNumber & mask;
        
        // Shift the third position digit back to last position
        output = output >> 3;
        
        console.log (output);
}

solve(['15'])  // answer 1
solve(['1024'])  // answer 0