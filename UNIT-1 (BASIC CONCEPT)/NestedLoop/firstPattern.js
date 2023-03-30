// Your First Pattern @ Ended

// Description

// You are given a number stored in a variable with the name n
// You have to print n lines, and on each line you have to print n stars

// For example, consider the value stored inn - 4. Then, the required 0
// utput will be
// 

// Sample Input
// 5

// Sample Output
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let n=5
yourFirstPattern(n) 
function yourFirstPattern(n) {
    for(let i=1; i<=n; i++){
        let bag=""
        for(let j=1; j<=n; j++){
            bag+="* "
        }
        console.log(bag)
    }
}
