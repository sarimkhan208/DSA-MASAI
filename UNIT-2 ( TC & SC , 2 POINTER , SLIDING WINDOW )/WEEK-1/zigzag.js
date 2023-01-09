// Description

// Given amatrixwithNrows andMcolumns. 
// Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Sample Input 1 

// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5

// Sample Output 1

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8


let matrix = [[4,7,1,1,7],[8,9,9,6,1],[6,4,9,5,1],[7,7,4,7,7],[8,6,2,5,5]],N=5,M=5;
goInZigZag(N,M,matrix)

function goInZigZag(N, M, matrix){
    let bag = ""
    for(let i=0; i<N; i++){
        if(i%2===0){
            for(let j=M-1; j>=0; j--){
                bag+=matrix[i][j]+" ";
            }
        }
        else{
            for(let k=0; k<M; k++){
                bag+=matrix[i][k]+" ";
            }
        }
    }
    console.log(bag)
  
}
