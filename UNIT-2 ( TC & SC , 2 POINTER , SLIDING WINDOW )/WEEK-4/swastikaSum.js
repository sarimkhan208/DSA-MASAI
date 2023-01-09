// Swastika & Sum Ended
// Description

// You are given a 2d array with n  rows and mcolumns where n and m are always odd. 
// There are two different parts present in the 2d array and the sum of all the elements of
// the first part is referred as sum1 and that of the other is referred as sum2. 
// You have to find the absolute difference between sum1 and sum2.


// Sample Input 1 

// 3 5
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// Sample Output 1

// 0
// Hint

// Explanation 0

// Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56

// sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56

// abs(sum1-sum2) = 0


let arr = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
let n = 3 , m = 5;
myFun(arr,n,m)
function myFun(arr,n,m){
    //sum1
    let sum1=0
    let mid = Math.floor(n/2)
    for(let i=0; i<m; i++){
        sum1+=arr[mid][i]
    }
    for(let i=0; i<mid; i++){
        sum1+=arr[i][0]
    }
    for(let j=mid+1; j<n; j++){
        sum1+=arr[j][m-1]
    }
    //sum2
    let sum2=0
    let mid2 = Math.floor(m/2)
    for(let i=0; i<n; i++){
        sum2+=arr[i][mid2]
    }
    for(let j=mid2+1; j<m; j++){
        sum2+=arr[0][j]
    }
    for(let k=0; k<mid2; k++){
        sum2+=arr[n-1][k]
    }
    console.log(Math.abs(sum1-sum2))
}