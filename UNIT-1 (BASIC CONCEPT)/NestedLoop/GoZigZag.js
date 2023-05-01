// Go in Zig-Zag

// Description

// Given a matrix with w rows and # columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// 1 2 3 4 5
// 6 7 5 9 1
// 3 2 5 4 6
// 7 8 9 1 2

// For example, for the above matrix, the required output would be as shown below.

// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2 


// Sample Input
// 4 5 
// 1 2 3 4 5
// 6 7 5 9 1
// 3 2 5 4 6
// 7 8 9 1 2

// Sample Output
// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2 

let matrix = [[1,2,3,4,5],[6,7,5,9,1],[3,2,5,4,6],[7,8,9,1,2,]]
let N=4,M=5
goInZigZag(N, M, matrix)
function goInZigZag(N, M, matrix){
    let bag=""
    for(let i=0; i<N; i++){
        if(i%2==0){
            for(let j=M-1; j>=0; j--){
                bag+=matrix[i][j]+" "
            }
        }
        else{
            for(let k=0; k<M; k++){
                bag+=matrix[i][k]+" "
            }
        }
    }
    console.log(bag)
}
