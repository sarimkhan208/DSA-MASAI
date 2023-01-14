// Non Repetitive Substrings Ended
// Description

// Given a string S and a number K, find the number of substrings of length K 
// such that each character in the substring is present only once.

// Note : The string contains special characters, capital letters, small letters

// Input
// Input Format

// The first line contains the number of testcases T

// For each testcase:

// The first line contains a string S

// The second line contains the number K

// Constraints

// 1<=T<=10

// 1<=length of S<=10^4

// 1<=K<=10^4


// Output
// For each testcase print the number of substrings of length K such that there are no repetitions in 
// the subtring


// Sample Input 1 

// 1
// idwmdggom
// 2
// Sample Output 1

// 7
// Hint

// The valid substrings are : id dw wm md dg go om

let str = "idwmdggom" , k=2;
myfun(str,k)
function myfun(str,k){
    let stk=[],count=0;
    for(let i=0; i<str.length; i++){
        let sub = ""
        for(let j=i; j<str.length; j++){
            sub+=str[j]
            if(sub.length>k){
                break;
            }
            else if(sub.length==k && check(sub)){
                count++
            }
        }
    }
    console.log(count)
    function check(sub){
        let obj = {};
        for(let i=0; i<sub.length; i++){
            let key = sub[i];
            if(obj[key] == undefined){
                obj[key]=1
            }else{
                obj[key]++
            }
        }
        for(let key in obj){
            if(obj[key]>1){
                return false
            }
        }
        return true
    }
}