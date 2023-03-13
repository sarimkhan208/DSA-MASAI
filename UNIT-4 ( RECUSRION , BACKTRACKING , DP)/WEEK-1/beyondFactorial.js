// Beyond Factorial! @ Ended

// Description

// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.., In(n!).
// You have to print the result up to 4 digits after the decimal point.

// Note:- You should not be supposed to do like " finding n! and apply direct inbuilt log on top that ". Instead of that, you can use Math.log() if applicable.Also, you can't u
// se any direct formula or perform the task iteratively - Try achieving the output recursively.

// Java Script:https://developer.mozilla.org/en-U S/docs/Web/JavaScript/Reference/Global_Objects/NumberitoFixed


// Input

// Input format
// Single line consists an integer N
// Constraints
// 1 <=N<=50

// Output

// Print the result in a single line.


// Sample Input
// 1

// Sample Output
// 1.7918

let sum=0
myfun(3)

function myfun(N){
    if(N==0){
        console.log(Number.parseFloat(sum).toFixed(4))
        return
    }
    sum+=Math.log(N)
    N--
    myfun(N)
    
}

