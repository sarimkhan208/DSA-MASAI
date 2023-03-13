// Factorial-Recursion

// Description

// The factorial of a positive integer N is the product of all positive integers less than or equal to n:
// Given a number N your task is to write a program that calculates factorial of N

// Input
// Input Format

// First and the only line contains N

// Constraints

// N<15

// Sample Input
// 5

// Sample Output
// 120



var mul=1
function factorial(N){
    if(N===0){
        return 
    }
    mul*=N
    N--
    factorial(N)
}


let n = factorial(5)
console.log(mul)

