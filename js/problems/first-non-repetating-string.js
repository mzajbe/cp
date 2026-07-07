function firstNonRepetatingString(str){
    count = {};

    // count frequency of each character 
    for(const char of str){
        count[char] = (count[char] || 0) + 1;

    }

    // find the first character with frequency 1 
    for(const char of str){
        if(count[char] === 1){
            return char;
        }
    }
    
     return null; //no non-repeating character
}

console.log(firstNonRepetatingString("aaabbc"));
