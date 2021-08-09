var reverse = function(x) {
    let number
    
    if (x === 0) {
        return 0
    } else if (x < 0) {
        number = -1*helper(x)
    } else {
        number = helper(x)
    }
    
    if (number < -1 * 2**31 || number >= 2**31) {
        return 0
    } else {
        return number
    }

    function helper(num) {
        let string = num.toString();
        let newString = ''
        
        for (let i=0; i < string.length; i++) {
            newString = string[i] + newString
        }
        
        return parseInt(newString)
    }
};

console.log(reverse(1534236469))