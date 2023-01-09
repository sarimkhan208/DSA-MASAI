// Sample Input 1

// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

// Sample Output 1

// 34

// hint-

// In the sample test case, the elements which do not lie at the border, are {6,7,10,11}.
//  Therefore, the sum of the elements are => 6 + 7 + 10 + 11 = 34, which is the required answer.

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],N=4,M=4
function sumWithoutBorders(N, M, matrix){
    let sum=0;
    for(let i=1; i<N-1; i++){
        for(let j=1; j<M-1; j++){
            sum+=matrix[i][j];
        }
    }
    console.log(sum)
  }
  
  
  sumWithoutBorders(matrix,N,M);