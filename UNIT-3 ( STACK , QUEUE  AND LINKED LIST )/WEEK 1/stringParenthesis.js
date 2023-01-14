// Strings with Parenthesis Ended
// Description

// Given a string containing three types of parenthesis : (), [], {}, 
// write a program to check whether the string contains a valid sequence of parentheses.


// Input
// Input Format

// Input contains one line which is the string with parentheses whose validity you have to check

// Constraints

// length of string <= 1000


// Output
// Output Format

// Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise 
// print "unbalanced" (without quotes)


// Sample Input 1 

// (((((((((())))))))))
// Sample Output 1

// balanced
// Sample Input 2 

// [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
// Sample Output 2

// balanced

let str = "(((((((((())))))))))"
myfun(str);
function myfun(str){
    let stk = []
    for(let i=0; i<str.length; i++){
        if(str[i] == ")" && stk.length!==0 && stk[stk.length-1]=="("){
            stk.pop()
        }
        else if(str[i] == "]" && stk.length!==0 && stk[stk.length-1]=="["){
            stk.pop()
        }
        else if(str[i] == "}" && stk.length!==0 && stk[stk.length-1]=="{"){
            stk.pop()
        }
        else if(str[i] == "(" || str[i] == "[" || str[i] == "{" || 
        str[i] == ")" || str[i] == "]" || str[i] == "}"){
            stk.push(str[i])
        }
    }
    if(stk.length==0){
        console.log("balanced")
    }else{
        console.log("unbalanced")
    }
}