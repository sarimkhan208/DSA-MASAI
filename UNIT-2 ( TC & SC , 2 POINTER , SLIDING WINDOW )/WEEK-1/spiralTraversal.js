// Description

// Given a matrix of size n by n. Traverse and print the matrix in spiral form.

// Sample Input 1 

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// Sample Output 1

// 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 

let matrix = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]] , N = 4;
spirallyTraversingAMatrix(N,matrix)
function spirallyTraversingAMatrix(N, matrix){
    //write code here
    let bag="";
    let top=0,left=0,right=N-1,bottom=N-1;
    while(bottom>top && right>left){
        for(let i=left; i<=right; i++){
            bag+=matrix[top][i]+" ";
        }
        top++;
        for(let j=top; j<=bottom;j++){
            bag+=matrix[j][bottom]+" ";
        }
        bottom--;
        for(let k=bottom; k>=left; k--){
            bag+=matrix[right][k]+" ";
        }
        right--;
        for(let l=right; l>=top; l--){
            bag+=matrix[l][left]+" ";
        }
        left++;
    }
    console.log(bag)
  
}
