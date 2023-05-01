// Count Digits [USE HIGHER ORDER FUNCTION]

// Description

// + You are given an array, stored in a variable with the size arr
// + The size of the array is stored in a variable with the name n

// + You have to find the count of 0's ,1's and 2's

// « For example, consider the array as arr = [@ 1 0 212 @12 0], and the value stored inn = 10
// + Then, the required output will be 4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3
// NOTE :

// 1. USE HIGHER ORDER FUNCTION TO SOLVE THIS PROBLEM.

// 2. Marks will be deducted, If HOF is not used.


// Sample input
// 10
// 0 1 0 1 1 1 0 2 2 0

// Sample Output
// 4 4 2


// Hint

// In the given array,0101110220
// The no. of 0's are: 4
// The no. of 1's are: 4

// The no. of 2's are: 2


let arr = [0,1,0,1,1,1,0,2,2,0] , N=arr.length
countZerosOnesTwos(N,arr)
function countZerosOnesTwos(N,arr){
    let zero = 0
    let one = 0
    let two = 0
    let bag = arr.forEach(function(elem,index){
        
        if(elem == 0){
            zero++
        }
        else if(elem == 1){
            one++
        }
        else if(elem == 2){
            two++
        }
    })
    console.log(zero,one,two)
}

