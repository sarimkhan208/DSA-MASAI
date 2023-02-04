// Set Zeroes -369:11:35
// Description

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the size of the matrix, n and m
// The next n lines each contains m values (0 or 1)
// Constraints

// 1<=t<=10

// 1<=n,m<=500


// Output
// Print the modified matrix.


// Sample Input 1 

// 1
// 3 3
// 1 1 1
// 1 0 1
// 1 1 1
// Sample Output 1

// 1 0 1
// 0 0 0 
// 1 0 1


let arr = [[1,1,1],[1,0,1],[1,1,1]],n=arr.length;m=3
myfun(arr,n,m)
function  myfun(arr,n,m){
    let myarr = [];
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(arr[i][j]==0){
                myarr.push([i,j])
            }
        }
    }
    for(let i=0; i<myarr.length; i++){
        horiz(myarr[i][0],myarr[i][1])
    }
    function horiz(a,b){
        for(let i=0; i<m; i++){
            arr[a][i] = 0
        }
        for(let i=0; i<n; i++){
            arr[i][b] = 0
        }
    }
    
    for(let i=0; i<n; i++){
        let bag = ""
        for(let j=0; j<m; j++){
            bag+=arr[i][j]+" "
        }
        console.log(bag)
    }
}