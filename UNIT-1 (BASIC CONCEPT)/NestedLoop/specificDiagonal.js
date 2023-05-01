// Specific Diagonals

// Description

// @ Ended

// Given a matrix of R rows and c columns which contains distinct integers and you are given a integer x and you need to print both the diagonals crossing through the given element

// k , you can always assume that the given element always exist in the matrix

 

// 1 2 3 4
// 5 6 7 8
// 9 10 1 12
// 12 14 15, 16

 

 

// In this 4*4 Matrix, suppose we need to print the diagonals passing from 11 , So the output will be


// Sample Input 1
// 3  3
// 1 2 3
// 4 5 6
// 7 8 9
// 6

// Sample Output 1
// 2 6
// 6 8

// Sample Input 2
// 3  3
// 1 2 3
// 4 5 6
// 7 8 9
// 5

// Sample Output 2
// 1 5 9
// 3 5 7

let matrix = [[1,2,3],[4,5,6],[7,8,9]] , R=matrix.length,  C=matrix[0].length , K=5
specificDiagonals(R, C, matrix, K)
function specificDiagonals(R, C, matrix, K){
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(matrix[i][j] == K){
                let sum = i+j;
                let diff = i-j
                checkdiagonal(sum,diff);
            }
        }
    }
    function checkdiagonal(sum,diff){
        let d1="";
        let d2 = "";
        for(let i=0; i<R; i++){
            for(let j=0; j<C; j++){
                if(i-j == diff){
                    d1+=matrix[i][j]+" "
                }
                if(i+j == sum){
                    d2+=matrix[i][j]+" "
                }
            }
        }
        console.log(d1)
        console.log(d2)
    }
}
