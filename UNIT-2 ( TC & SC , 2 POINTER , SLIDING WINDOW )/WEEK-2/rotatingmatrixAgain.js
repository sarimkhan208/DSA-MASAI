// Rotating Matrix Again

// Description

// You are given an n x n 2D matrix.

// Rotate the matrix by 90 degrees (clockwise).

// You need to do this without using any lists.

// (You can use a list for storing the input)

// Sample Input 1 

// 1 2 3 4 5 6 7 8 9

// Sample Output 1

// 7 4 1 8 5 2 9 6 3 


let arr = [1,2,3,4,5,6,7,8,9] ,m = 9

function myFunction(arr,m){
    let bag = "";
    for(let i=0; i<m; i++){
        for(let j=m-1; j>=0; j--){
            bag+=arr[j][i]+" "
        }
    }
    console.log(bag)
}