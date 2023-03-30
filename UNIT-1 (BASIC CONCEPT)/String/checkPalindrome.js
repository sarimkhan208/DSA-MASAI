// Check Palindrome @ Ended

// Description

// + You are given a string, whose size is stored in a variable with the
// name w

// + The string is stored in a variable with the name str
// + Print ves , if the string is a palindrome, else print no

// + For example, consider the value stored in str = “naman” , if we r
// everse the string, the reversed string will be the same as the origi
// nal string, hence the string is considered as palindrome, therefor
// e, the output is ves

// Note : A palindrome is a string which is the same read forwards or


// Sample Input 1 

// 6 
// nrupul


// Sample Output 1
// No


let str = 'nrupul', N=str.length
checkPalindrome(N, str)
function checkPalindrome(N, str) {
    let bag = "";
    for(i=str.length-1; i>=0; i--)
    {
        bag = bag+str[i]
    }
    if(bag == str)
    {
        console.log("Yes")
    }
    else
    {
        console.log("No")
    }
  
}
