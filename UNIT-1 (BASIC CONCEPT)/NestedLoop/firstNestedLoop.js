// Your first nested loop @ Ended

// Description

// You are given a number, stored in a variable with the name num

// You have to print num lines, and on each line print all the numbers from
// 1 to the value stored in num

// For example, if the value stored in num = 5 , then the required output is,

// Sample Input
// 4

// Sample Input
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

let num = 4

yourFirstNested(num)
function yourFirstNested(num) {
    for(i=1; i<=num; i++){
        let bag=""
        for(let j=1; j<=num; j++){
            bag+=j+" "
        }
        console.log(bag)
    }
}
