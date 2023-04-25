// Traverse a 2D Array

// Description

// You are given a 2D array( matrix ), of N rows and m columns

// You need to print elements of array as shown in the diagram, on a single line

// Sample Input 1 &

// 4 3
// 1 8 9
// 2 7 1 0
// 3 6 1 1
// 4 5 1 2


// Sample Output 1

// 4 3 2  1 5 6 7 8 1 2 1 1 10 9 

let  matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let N = matrix.length; M=matrix[0].length

traverse2dArray(N, M, matrix)

function traverse2dArray(N, M, matrix){
    let bag=""
    for(let i=0; i<M; i++){
        for(let j=N-1; j>=0; j--){
            bag+=matrix[j][i]+" "
        }
    }
    console.log(bag)
}
