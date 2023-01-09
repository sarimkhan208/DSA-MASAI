// Anagram Detector! Ended
// Description

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"

// Sample Input 1 

// anagram
// nag a ram
// Sample Output 1

// True


let arr = "anagram"
let subArr ="nag a ram"
myfun(arr,subArr)
function myfun(arr,subArr){
    let a = [],b=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] != " "){
            a.push(arr[i])
        }
    }
    for(let i=0; i<subArr.length; i++){
        if(subArr[i] != " "){
            b.push(subArr[i])
        }
    }
    a.sort()
    b.sort()
    if(a.join("") == b.join("")){
        console.log("True")
    }else{
        console.log("False")
    }
    
}