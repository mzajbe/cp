// https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript


var isEmpty = function(obj) {

    if(Object.keys(obj).length === 0){
        return true;
    }else{
        return false;
    }
    
};

let obj = [null, false, 0]




console.log(isEmpty(obj));