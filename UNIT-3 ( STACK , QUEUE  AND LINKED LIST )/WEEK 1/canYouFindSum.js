// Can you find the sum Ended
// Description

// Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

// The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
// If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.

// Input
// Input Format

// First line consists of a single integer denoting N.

// Second line consists of N space separated integers denoting the array A.

// Constraints

// 1 <= N <= 10^6

// 1 <= A[i] <= 10^9


// Output
// Print N space separated integers, denoting x+y for each i


// Sample Input 1 

// 5
// 5 4 1 3 2
// Sample Output 1

// -2 0 6 1 3 
// Hint

// Sample 1 Explanation

// Values of x for each i: -1,1,2,2,4

// Values of y for each i: -1,-1,4,-1,-1

// So, x+y for each i: -2,0,6,1,3
let arr = [5,4,1,3,2] , n = arr.length
myfun(arr,n)
function myfun(arr,n){
    let stk = []
    let index = []
    let ans1 = []
    for(let i=0; i<n; i++){
        while(stk.length!=0 && arr[i]>=stk[stk.length-1]){
            stk.pop()
            index.pop()
        }
        if(stk.length==0){
            ans1.push(-1)
        }
        else{
            ans1.push(index[index.length-1]+1)
        }
        stk.push(arr[i])
        index.push(i)
    }
    stk = []
    index = []
    let ans2 = []
    for(let i=n-1; i>=0; i--){
        while(stk.length!=0 && arr[i]>=stk[stk.length-1]){
            stk.pop()
            index.pop()
        }
        if(stk.length==0){
            ans2.push(-1)
        }
        // can u finf sum
        else{
            ans2.push(index[index.length-1]+1)
        }
        stk.push(arr[i])
        index.push(i)
    }
    let res = ""
    for(let i=0; i<n; i++){
        res+=ans1[i]+ans2[n-1-i]+" "
    }
    console.log(res)
    
}