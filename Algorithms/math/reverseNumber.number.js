var reverse = function(x) {
    
    
    let number = 0;
    let remainder = 0;
    let sign =  x < 0;

    x = Math.abs(x);
    
    while(x != 0){

        remainder =  x%10;
        number = (number * 10 ) + remainder;
        x = parseInt(x/10);
    }

    return number > 0x7FFFFFFF ? 0 : sign ? -1*number : number;;
    
};

reverse(-123)