// Feel Good Strings @ Ended

// Description

// Tom loves vowels. Any string which have half of the characters vowels make him feel good. You are given a string of length N, where N is an even number. If the number of vowels i
// n the string, are more than or equal to N/2, print "Feel good!’, else print "Feel badl". (Alll the letters in the string are in lower case)

// Note : The letters a, e, i, 0, and u are said to be vowels.

// Sample Input
// 4
// uuuu

// Sample Output
// Feel Good!

let string = "uuuu" , N=string.length
feelGoodStrings(N,string)
function feelGoodStrings(N,string){
    let count=0
    for(let i=0; i<N; i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
            count++
        }
    }
    if(count>=N/2){
        console.log("Feel good!")
    }
    else{
        console.log("Feel bad!")
    }
}
