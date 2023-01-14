// Valid Stack Sequence Ended
// Description

// Given two integer arrays pushed and popped each with distinct values, print "YES" if 
// this could have been the result of a sequence of push and pop operations on an initially empty stack, 
// or "NO" otherwise.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of values - n
// The second line contains the pushed array
// The third line contains the popped array
// Constraints

// 1<=t<=10

// 1<=n<=10^5

// All elements of pushed and popped are distinct


// Output
// Print "YES" if this could have been the result of a sequence of push and pop operations on an initially 
// empty stack, or "NO" otherwise.


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 4 5 3 2 1
// 5
// 1 2 3 4 5
// 4 3 5 1 2
// Sample Output 1

// YES
// NO
// Hint

// Explanation 1 : We might do the following sequence:

// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Explanation 2 : 1 cannot be popped before 2.


let arr1 = [1,2,3,4,5] , arr2 = [4,5,2,3,1] , n=5;
myfun(n,arr1,arr2);
function myfun(n,arr1,arr2){
    let stk = [];
    let l = 0
    for(let i=0; i<n; i++){
        stk.push(arr1[i]);
        while(l<n && stk.length!=0 && stk[stk.length-1] == arr2[l]){
            stk.pop()
            l++
        }
    }
    if(stk.length==0){
        console.log("YES")
    }else{
        console.log("NO")
    }
}