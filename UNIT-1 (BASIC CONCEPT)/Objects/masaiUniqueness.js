// Masai Uniqueness

// Description

// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).
// If it has just unique character, output "Unique"
// Else in all other cases, output "No"

// Input
// Input Format
// First and the only line contains string S
// Constraints

// Length of S < 1000

// Output

// Output one string based on string

// Sample Input 1  
// masai 


// Sample Output 1
// No



masaiUniqueness(masai)
function masaiUniqueness(S){
    let obj={};
    for(let i=0; i<S.length; i++){
        if(obj[S[i]] == undefined){
            obj[S[i]]=1;
        }
        else{
            obj[S[i]]++
        }
    }
    let flag = false;
    for(let key in obj){
        if(obj[key]>1){
            flag = true
        }
    }
    if(flag == true){
        console.log("No")
    }else{
        console.log("Unique")
    }
}
