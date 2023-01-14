// Nearest Smaller Element Ended
// Description

// You are given an array A of size N. For each element, in the array find the closest element 
// with a smaller value, than the current value. If no such element exists, print -1. 
// If two values are equidistant to the current value, print the one that occurs to the left of it. 
// Refer the sample I/O for better understanding.


// Input
// The first line contains T, the number of test cases. The first line of each test case contains N, 
// the size of the array.

// Next line contains N space separated integers denoting the closest smaller values, or -1, 
// if no such values exist.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 1 <= A[i] <= 10^4


// Output
// For each test case, print N space separated integers, denoting the nearest smaller elements, or -1 
// if it does not exists, on a new line.


// Sample Input 1 

// 1
// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// 27 11 4 1 4 24 1 -1 
// Hint

// In the sample test case, the array has 8 elements. The closest value to the first element 39, which is lesser than it is 27. Similarly, for 27 is 11, for 11 is 4, for 4 is 1, for 24 is 4, for the first instance of 32, the closest value is 24, and for the second instance, the closest value is 1, and for 1, the value is -1, as 
// it has no values lesser than it in the array.

let arr = [39,27,11,4,24,32,32,1] , n=arr.length;
myfun(arr,n)
function myfun(arr,n){
    let stk1 =[];
    let index1 = [];
    let ans1 = [];
    for(let i=0; i<n; i++){
        while(stk1.length!==0 && arr[i]<=stk1[stk1.length-1]){
            stk1.pop()
            index1.pop()
        }
        if(stk1.length==0){
            ans1.push(-1)
        }
        else{
            ans1.push(index1[index1.length-1])
        }
        stk1.push(arr[i]);
        index1.push(i)
    }
    
    
    let stk2 =[];
    let index2= [];
    let ans2 = [];
    for(let i=n-1; i>=0; i--){
        while(stk2.length!==0 && arr[i]<=stk2[stk2.length-1]){
            stk2.pop()
            index2.pop()
        }
        if(stk2.length==0){
            ans2.push(-1)
        }
        else{
            ans2.push(index2[index2.length-1])
        }
        stk2.push(arr[i]);
        index2.push(i)
    }
    let ans3 = [];
    for(let i=ans2.length-1; i>=0; i--){
        ans3.push(ans2[i])
    }
    
    let res = []
    for(let i=0; i<n; i++){
        
        if(ans1[i]==-1 && ans3[i]==-1){
            res.push(-1)
        }
        else if(ans1[i]==-1){
            res.push(arr[ans3[i]])
        }
        else if(ans3[i]==-1){
            res.push(arr[ans1[i]])
        }
        else if(Math.abs(i-ans1[i]) == Math.abs(i-ans3[i])){
            res.push(arr[ans1[i]])
        }
        else{
            let l = Math.abs(i-ans1[i]);
            let r = Math.abs(i-ans3[i]);
            if(l>r){
                res.push(arr[ans3[i]])
            }
            else{
                res.push(arr[ans1[i]])
            }
        }
    }
    console.log(res.join(" "))
    
}