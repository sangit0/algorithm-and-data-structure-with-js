/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(k, n) {
  
    
    const testEggDrop = (n, k) =>{
        
        let min = Number.POSITIVE_INFINITY;
        let result = 0;
        
        if(n <= 1 || k === 1) {
            return n; // for one egg and one floor need N number Of test
        }
        
        let left = 1;
        let right = n;
        while (left <= right) {

            let mid= parseInt((left+right)/2);

            left = testEggDrop(mid- 1, k -1); //egg breaks
            right = testEggDrop(n-mid, k); //egg not breaks

            result = Math.max(left, right) + 1;
           
            if (left < right) {
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }

            min = Math.min(result, min);
        }
        
        return min += 1;
    }
    
    return testEggDrop(n,k);
};