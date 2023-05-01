// // Is it Happy? @ Ended

// // Description

// // A happy number is a number defined by the following process: Starting with any positive integer, replace the number with the sum of the squares of its digits, and repeat the process
// // until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers

// // Return true if n is a happy number, and false if not.


// // Output

// // true if it is happy else false

// // description for 19,

// // 1^2 + 9^2 = 82
// // 8^2 + 8^2 = 68
// // 6^2 + 8^2 = 100
// // 1^2 + 0^2 + 0^2 = 1


// Sample Input 1
// 19
// Sample Output 1
// true

// Sample Input 2
// 2
// Sample Output 2
// false

// Sample Input 3
// 312082396
// Sample Output 3
// true



happy(19)
function happy(n) {
    let happy = false;
    for(let i=0; i<1000; i++){
        n = n+"";
        let sum = 0
        for(let j=0; j<n.length; j++){
            sum+=Number(n[j])**2;
        }
        if(sum==1){
            happy  = true;
            break
        }
        n=sum
    }
    console.log(happy)
}
