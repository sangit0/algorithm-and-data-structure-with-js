/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    s = s.replace(/[^a-zA-Z0-9+]/g, "");
     for (let index = 0 ; index <  s.length - index; index++) {
        
        let element =  s[index];
        reverse = s[s.length -1 -index];
        if (element.toLowerCase() !== reverse.toLowerCase()) {
            return false;
        }
    }
    
    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));