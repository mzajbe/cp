



var pivotIndex = function(nums) {

let totalsum = 0;
let leftsum = 0;
for( const num of nums){
    totalsum += num;
}

for(let i=0; i<nums.length; i++){
    
    let rightsum = totalsum - nums[i] - leftsum;

    if(leftsum === rightsum){
        return i;
    }
    leftsum += nums[i];
}


return -1;
    
};





const nums = [2,1,-1];
let result = pivotIndex(nums);
console.log(result);

