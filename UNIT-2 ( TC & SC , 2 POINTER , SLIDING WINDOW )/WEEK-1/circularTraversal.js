// Given a square matrix, you have to find the reverse U traversal of the matrix. 

// Sample Input 1

// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1

// 7 4 1 2 3 6 9 8 


function cirTraversal(matrix,N) {
    let bag = "";
    for(let i=N-1; i>=0; i--){
        bag+=matrix[i][0]+" ";
    }
    for(let j=1; j<N; j++){
        bag+=matrix[0][j]+" ";
    }
    for(let k=1; k<N; k++){
        bag+=matrix[k][N-1]+" ";
    }
    for(let l=N-2; l>0; l--){
        bag+=matrix[N-1][l]+" ";
    }
    console.log(bag)
 }
 let arr= [[1,2,3],[4,5,6],[7,8,9]]
 cirTraversal(arr)  