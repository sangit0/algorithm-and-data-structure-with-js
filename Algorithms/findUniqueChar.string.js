/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {

    const duplicates = new Map();
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (duplicates.has(element)) {
            duplicates.set(element, { count: duplicates.get(element)['count'] +1 , index  });
        }
        else{
            duplicates.set(element, { count : 1 , index});
        }

    }

    for (const iterator of duplicates) {
        if (iterator[1].count === 1) {
          return iterator[1].index;
        }
    }

    return -1;
};

console.log(firstUniqChar('abaccd'));
//abacc