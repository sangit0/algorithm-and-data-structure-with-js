/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    
    let count =[];
    
    let anagram = new Map();

    strs.forEach(item=>{
      count = new Array(26).fill(0);
      for(let i = 0; i< item.length; i++){
          let index = item.charCodeAt(i) - 'a'.charCodeAt(0);
          count[index]++;
      }
      
      let key = "";  
      
      for(let i = 0; i< 26; i++){
          key+= "#"+count[i]
      }
      
        if(anagram.has(key)){
            anagram.set(key, [...anagram.get(key), item])
        }
        else{
            anagram.set(key, [item])
        }

    });
    
    return Array.from(anagram.values());
};