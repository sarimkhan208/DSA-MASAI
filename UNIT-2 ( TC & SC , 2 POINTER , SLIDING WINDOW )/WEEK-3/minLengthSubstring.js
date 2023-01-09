// Min Length, Substring, Distinct 
// Description

// Given a string, find the length of the smallest sub-string consisting of maximum distinct characters.

// Also note that the output can have reprating characters.

// Suppose string is aaabbbcdcd, but the substring "abbbcd" contains all the distinct characters present in 
// the string (i.e. "a", "b", "c", "d")

// Sample Input 1 

// zoomsessionmooz
// Sample Output 1

// 10



let s = "zoomsessionmooz"
minLengthSubstr(s)
function minLengthSubstr(s){
    let min = Infinity;
    let newset = new Set(s)
    for(let i=0; i<s.length; i++){
        let str = ""
        for(let j=i; j<s.length; j++){
            str+=s[j]
            let tempset = new Set(str);
            if(tempset.size == newset.size && str.length<min){
                min = str.length
            }
        }
    }
    console.log(min)
}
