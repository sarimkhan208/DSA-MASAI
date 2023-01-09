// Sum of Boundary and Diagonal Elements 
// Description

// You will be given an n by n matrix.
// You will have to calculate the sum of the boundary and diagonal elements of the matrix.
//  Avoid adding an element twice, if it is counted in boundary elements then don't 
// consider it twice in the diagonal element

// Sample Input 1 

// 5
// 1 2 3 4 5
// 6 7 8 9 1
// 2 3 4 5 6
// 7 8 9 1 2
// 3 4 5 6 7

// Sample Output 1

// 93

// Hint

// Sample 1 Explanation

// Boundary Elements-1,2,3,4,5,1,6,2,7,6,5,4,3,7,2,6

// Diagonal Elements(without counting an element twice)-7,4,1,9,4,8


let arr = [[1,2,3,4,5],[6,7,8,9,1],[2,3,4,5,6],[7,8,9,1,2],[3,4,5,6,7]],n=5;
sumOfBoundaryAndDiagonal(arr)
function sumOfBoundaryAndDiagonal(arr){
    let n = arr.length;
    let sum = 0
    // row
    for(let i=0; i<n; i++){
        sum+=arr[0][i]
        sum+=arr[n-1][i]
    }
    for(let i=1; i<n-1; i++){
        sum+=arr[i][0]
        sum+=arr[i][n-1]
        sum+=arr[i][i]
        for(let j=1; j<n-1; j++){
            if(i+j==n-1 && i!=j){
                sum+=arr[i][j]
            }
        }
    }
    console.log(sum)
}
