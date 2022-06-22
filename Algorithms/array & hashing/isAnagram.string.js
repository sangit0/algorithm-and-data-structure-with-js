/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let sMap =  new Map();
    let tMap =  new Map();

    for (let index = 0; index < s.length; index++) {
        sMap.set(s[index], sMap.get(s[index]) ? sMap.get(s[index])  + 1 :  1)
        tMap.set(t[index], tMap.get(t[index]) ? tMap.get(t[index])  + 1 :  1)
        
    }


    let isAnagramBool = true;
     tMap.forEach((element,index) => {
      if (sMap.get(index) !== element) {
        isAnagramBool =  false;
      }
    });

    return isAnagramBool;
    
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("aacc", "ccac"));