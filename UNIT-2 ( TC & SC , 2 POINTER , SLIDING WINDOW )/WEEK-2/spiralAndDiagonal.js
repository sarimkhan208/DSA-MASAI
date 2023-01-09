// Spirals and Diagonals 
// Description

// You are given an integer n. The next line is an array A which contains n*n elements. 
// The spiral traversal of a square matrix of dimension (n x n) results in the given array.

// Calculate the sum of all elements which are on the diagonals of the square matrix.

// Sample Input 1 

// 4
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

// Sample Output 2

// 68

let arr = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10] , n=4
myfun(arr,n)
function myfun(arr,n){
    let mainArr = []
    for(let i=0; i<n; i++){
        let temp= []
        for(let j=0; j<n; j++){
            temp.push("x")
        }
        mainArr.push(temp)
    }
    
    let index = 0
    let top=0,left=0,right=n-1,bottom=n-1;
    while(index<arr.length){
        for(let i=top; i<=right; i++){
            mainArr[top][i] = arr[index++];
        }
        top++
        for(let i=top; i<=bottom; i++){
            mainArr[i][bottom] = arr[index++];
        }
        bottom--;
        for(let i=bottom; i>=left; i--){
            mainArr[right][i] = arr[index++];
        }
        right--;
        for(let i=right; i>=top; i--){
            mainArr[i][left] = arr[index++];
        }
        left++;
    }
    
    let sum = 0
    for(let i=0; i<mainArr.length; i++){
        sum+=mainArr[i][i]
        for(let j=0; j<mainArr.length; j++){
            if(i+j==mainArr.length-1 && i!=j){
                sum+=Number(mainArr[i][j])
            }
        }
    }
    console.log(sum)
}