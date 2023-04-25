// String Cut

// Description

// You are given a string S. Cut it into 2 equal halves and reverse it
// So, suppose if you have a string "abcxyz" then after performing the above mentioned operation it becomes "cbazyx"
// Ifyou have a string "abcdxyz”, then after performing the above mentioned operation it becomes "cbadzyx"
// Input
// Input Format :
// First line of input contains the string S
// Constraints :

// Length of S <= 1000

// Sample Input 1 
// abexyz 

// Sample Output 
// cbazyx


let S = "abexyz"
stringCut(S)
function stringCut(S){
    let bag=""
    if(S.length%2==0){
        for(let i=S.length/2-1; i>=0; i--){
            bag+=S[i]
        }
        for(let j=S.length-1; j>=S.length/2; j--){
            bag+=S[j]
        }
    }
    else{
        let mid = Math.floor(S.length/2);
        for(let i=mid-1; i>=0; i--){
            bag+=S[i]
        }
        bag+=S[mid]
        for(let j=S.length-1; j>mid; j--){
            bag+=S[j]
        }
    }
    console.log(bag)
}
