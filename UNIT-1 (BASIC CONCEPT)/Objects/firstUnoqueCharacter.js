// First unique character

// Description
// You are given a string, You have to print the first non-repeating character of the string if exists, else print "Not Found"

// In the given sample input
// S = "racecars"
// r, aand c appear 2 times, e and s appear 1 time.

// and e is the first non-repeating character.


// Sample Input
// racecar

// Sample Output
// e

let S = "racecar"
firstUniqueChar(S)
function firstUniqueChar(S){
    let obj={};
    for(let i=0; i<S.length; i++){
        if(obj[S[i]] == undefined){
            obj[S[i]] = 1;
        }
        else{
            obj[S[i]]++
        }
    }
    let bag = "";
    for(let key in obj){
        if(obj[key] == 1){
            bag+=key;
            break;
        }
    }
    if(bag.length == 0){
        console.log("Not Found")
    }
    else{
        console.log(bag)
    }
}
