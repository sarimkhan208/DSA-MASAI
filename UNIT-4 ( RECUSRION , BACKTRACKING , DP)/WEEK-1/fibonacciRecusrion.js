// Fibonacci-Recursion @ Ended

// Description
// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, sta
// rting from 0 and 1. That is

// F(0)=0,F(1)=14
// and

// F(n)=F (n-1)+F (n-2),
// forn>4

// Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n

// Input

// Input Format
// First line of input contains n

// Constraints
// n<35
// Output

// Output Format

// Output the n-th fibonacci number


// Sample input
// 4

// Sample Output
// 3


console.log(myfun(4))

let sum=1,num=0
function myfun(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return myfun(n-1)+myfun(n-2)
}