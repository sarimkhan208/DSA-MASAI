// Apply Basic Maths

// Description

// You are given an array A with n elements. You are allowed to remove o
// nly one element , which makes the sum of all the remaining elemen
// ts exactly divisible by 7

// Your task is to find the first index of smallest element that can be r
// emoved from array. If there is no answer print -1

// Sample Input 1  

// 5 
// 14 7 8 2 4
// Sample Output 1
// 1


let A = [14,7,8,2,4] , N=A.length
applyBasicMaths(N,A)
function applyBasicMaths(N,A){
    let sum = 0
    for(let i=0; i<N; i++){
        sum+=A[i]
    }
    let min = Infinity;
    let index = -1;
    for(let j=0; j<N; j++){
        let rem = sum - A[j]
        if(rem%7==0 && min > A[j]){
            min = A[j];
            index = j
        }
    }
    console.log(index)
}
