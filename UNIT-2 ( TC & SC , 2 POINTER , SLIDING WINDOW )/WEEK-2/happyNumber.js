// Happy number 
// Description

// Write an algorithm to determine if a numbernis happy.

// Ahappy numberis a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.

// Repeat the process until the number equals 1 (where it will stay), or itloops endlesslyin a cycle which does not include 1.

// Those numbers for which this processends in 1are happy.


// Sample Input 1 

// 2
// 19
// 2
// Sample Output 1

// Yes 
// No
// Hint

// First testcase
// 1^2 + 9^2 = 82

// 8^2 + 2^2 = 68

// 6^2 + 8^2 = 100

// 1^2 + 0^2 + 0^2 = 1

let num = 19;
console.log(myFunction(num))
function myFunction(num){
    num = num+"";
    let sum = 0
    for(let i=0; i<1000; i++){
        for(let i=0; i<num.length; i++){
            sum+=num[i]**2;
        }
        if(sum==1){
            return "Yes"
        }
        num = String(sum)
        sum=0
    }
    return "No"
}