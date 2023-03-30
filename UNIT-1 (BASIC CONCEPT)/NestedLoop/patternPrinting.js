// Pattern Printing

// Description

// You are given a number, stored in a variable with the name n
// Print the pattern as shown below.

// If the value stored inn = 4 , then the pattern required will be

// *
// **
// ***
// ****

// Sample Input
// 2
// Sample Output
// *
// **


let N = 2
patternPrinting(N)
function patternPrinting(N) {
    for(let i=1; i<=N; i++){
        let bag=""
        for(let j=1; j<=i; j++){
            bag+="*"
        }
        console.log(bag)
    }
}
