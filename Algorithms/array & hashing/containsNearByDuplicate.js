/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    
    let duplicate = new Map();
    
    for(let i = 0; i< nums.length; i++){
        if(duplicate.has(nums[i]) && Math.abs(duplicate.get(nums[i]) - i) <= k){
            return true;
        }
        else{
            duplicate.set(nums[i], i);
        }
    }    
    return false;
};

containsNearbyDuplicate([1,2,3,1],3)