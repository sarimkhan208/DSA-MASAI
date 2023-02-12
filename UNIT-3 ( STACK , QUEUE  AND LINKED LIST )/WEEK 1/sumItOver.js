// Sum it over Ended
// Description

// Your boss has given you a number s and asked you to return the minimum number x such that 
// the sum of the digits of x is s.

// Also all the digits in x should be distinct.


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next t lines contains the description of the t testcases.

// The first and the only line of each testcase contains an integer s.

// Constraints
// 1 ≤ t ≤ 45

// 1 ≤ s ≤ 45


// Output
// Output Format
// Print t integers — the answers to the given test cases.


// Sample Input 1 

// 4
// 20
// 8
// 45
// 10
// Sample Output 1

// 389
// 8
// 123456789
// 19
// Hint

// For example, if s=20, then the answer is 389. This is the minimum number in 
// which all digits are different and the sum of the digits is 20 (3+8+9=20).


let num=45
myfun(num)
function myfun(num){
    let m=9,res=[]
    while(m>0){
        if(num-m>=0){
            num=num-m
            res.push(m)
        }
        m--
    }
    console.log(res.reverse().join(""))
}