// Minimum in array @ Ended

// Description

// as

// You are given an array, stored in a variable with the size arr
// The size of the array is stored in a variable with the name n
// You have to find the minimum number in the array

// For example, consider the array as arr = [1 2 3 4 5], and the

// value stored inn = 5

// Then, the required output will be 1, as it is the smallest number i
// nthe array
// 

// Input

// The first line of the input contains the value stored in w , the size of the
// array

// The next line contains n space separated numbers denoting the eleme
// nts of the array

// Output

// Print the minimum element in the array, as explained in the problem st
// atement

// Sample Input 1 & Sample Output 1

// 12345
// 

let arr=[1,2,3,4,5] , N=arr.length
minimumInArray(N,arr)
function minimumInArray(N,arr){
    let min = Infinity;
    for(let i=0; i<N; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min)
}
