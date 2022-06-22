/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {

    for (let index = 0; index < s.length - index; index++) {
        [s[index], s[s.length - 1 - index]] = [s[s.length - 1 - index], s[index]]; 
        console.log(s[index],  s[s.length - 1 - index] );
    }

    
    console.log(s);
};

reverseString("sangit")