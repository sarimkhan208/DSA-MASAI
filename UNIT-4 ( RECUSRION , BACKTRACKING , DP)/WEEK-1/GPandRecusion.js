// GP & Recursion

// Description
// Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:

// Assume, you are given
// S= 1+ (ir) + (412) + (4103) +. (/en)

// You will be given two integers n andr

// Your task is to calculate the sum S by writing a recursive function

// Using iterative approach or formula to calculate the sum can lead to disqualification directly


// Input

// Input Format
// First line of input contains space separated numbers n and r respectively
// Constraints

// n<= 1000

// r<=10

// Output

// Output till 4 places after the decimal. For instance, 12.1345 is a valid answer but 12.43138 is not. 12.0000 is also a valid answer

// Sample Input
// 1 1

// Sample Output
// 2.0000

let n=3 , r=5
myfun(n,r)
function myfun(n,r){
    let sum = 1
    function find(n,r){
        if(n==0){
            return
        }
        sum+=(1/(r**n))
        n--
        find(n,r)
    }
    find(n,r)
    console.log(Number.parseFloat(sum).toFixed(4))
    
}