// Good-Bad String @ Ended

// Description

// We do not like strings which have same consecutive letters. No one ha
// s any idea why it is so.

// We call these strings as Bad strings. So, Good strings are the strings
// which do not have same consecutive letters. Now, the problem is simpl
// e. Given a string S, you need to convert it into a Good String
// 

// Sample Input
// abb
// aaab
// ababa

// Sample output
// ab
// ab
// ababa

let str = 'aaab'
goodBadStr(str)
function goodBadStr(str) {
    let bag=""
    for(let i=0; i<str.length; i++){
        if(str[i] != str[i+1]){
            bag+=str[i]
        }
    }
    console.log(bag)
}
