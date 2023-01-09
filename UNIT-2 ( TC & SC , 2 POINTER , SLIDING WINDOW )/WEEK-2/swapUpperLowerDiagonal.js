// Swap Upper-Lower Diagonal Elements
// Description

// Given a square matrix of dimension (nxn). 
// Swap the lower diagonal elements of the matrix with the upper diagonal elements of the matrix.

// Sample Input 

// 4
// 2 3 5 6
// 4 5 7 9
// 8 6 4 9
// 1 3 5 6

// Sample Output 1

// 2 4 8 1 
// 3 5 6 3 
// 5 7 4 5 
// 6 9 9 6 


let arr = [[2,3,5,6],[4,5,7,9],[8,6,4,9],[1,3,5,6]],n=4
myFun(arr,n)
function myFun(arr,n){
    
    for(let i=0; i<n; i++){
        let bag = "";
        for(let j=0; j<n; j++){
            bag+=arr[j][i]+" "
        }
        console.log(bag)
    }
}