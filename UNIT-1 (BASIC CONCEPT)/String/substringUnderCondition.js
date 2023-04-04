// Substring under condition @ Ended

// Description

// You are given a string s , you have to find the count of all such substrings
// which start and ends with the same character.


// Sample Input
// abcab


// Sample Output
// 7

subStrUnderCond("abcab")
function subStrUnderCond(s){
    let count=0
    for(i=0;i<s.length;i++){
        let bag=""
        for(j=i;j<s.length;j++){
            bag+=s[j]
            if(bag[0]==bag[bag.length-1]){
                count++
            }
            
        }
    }
    console.log(count)
}
