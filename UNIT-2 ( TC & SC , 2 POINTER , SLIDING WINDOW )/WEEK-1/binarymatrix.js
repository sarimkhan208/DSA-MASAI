// Binary Matrix 

// Description

// You are given a binary matrix of size N x M. 
// A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. 
// Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

// Sample Input 1 

// 3 2
// 1 0
// 0 1
// 1 1

// Sample Output 1

// 0 1 
// 1 0 
// 0 0 

// Hint

// In the sample test case, we are given a 3 x 2 matrix. In the first row, the row is -> {1,0}. Flipping the 0's to 1's and 1's to 0's, the row becomes {0,1}. Similarly, the second row after flipping becomes

// {1,0}, and the third row after flipping becomes {0,0}.


let arr = [[1,0],[0,1],[1,1]] , N=3, M=2;

binaryMatrix(N,M,matrix)
function binaryMatrix(N,M, arr) {
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(arr[i][j]==0){
                arr[i][j]=1
            }
            else{
                arr[i][j]=0
            }
        }
    }
    for(let i=0; i<N; i++){
        console.log(arr[i].join(" "))
    }
}
