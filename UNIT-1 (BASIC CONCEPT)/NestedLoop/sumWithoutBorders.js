// Sum without borders

// Description

// You are given a matrix of size n x m. Find the sum of all the elements of the matrix which do not lie at the border.


// // Sample Input 1
// // 3  3
// // 1 2 3
// // 4 5 6
// // 7 8 9

// // Sample Output 1
// // 5

let matrix = [[1,2,3],[4,5,6],[7,8,9]] , n=matrix.length,  m=matrix[0].length 
sumWithoutBorders(n, m, matrix)
function sumWithoutBorders(n, m, matrix){
    let sum = 0;
    for(let i=1; i<n-1; i++){
        for(let j=1; j<m-1; j++){
            sum+=matrix[i][j]
        }
    }
    console.log(sum)
  
}
