// Possible Palindrome Ended
// Description

// Given a strings, returntrueif a permutation of the string could form a palindrome.


// Input
// Input Format

// The first line contains the number of testcases T

// Each testcase contains a string S

// Constraints

// 1<= length of S <= 10^5

// 1<=T<=10


// Output
// Print "Yes" if a permutation of S can be palindrome, else print "No"


// Sample Input 1 

// 1
// carerca
// Sample Output 1

// Yes
// Hint

// "carerca" has a permutation "carerac" which is palindrome




let str = "carerca"
myfun(str)
function myfun(str){
    let obj = {};
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = 1
        }
        
        else{
            obj[str[i]]++
        }
    }
    let count=0,flag=true
    for(let key in obj){
        if(obj[key]%2==1){
            count++;
            if(count>1){
                flag=false;
                break
            }
        }
    }
    if(flag==true){
        console.log("Yes")
    }else{
        console.log("No")
    }
}