// Maximum in array @ Ended

// Description

// You are given an array, stored in a variable with the size arr
// The size of the array is stored in a variable with the name n
// You have to find the maximum number in the array

// For example, consider the array as arr = [1 2 3 45], and the
// value stored inn = 5

// Then, the required output will be s , as it is the largest number in
// the array
// 

// Input

// The first line of the input contains the value stored in n , the size of the
// array

// The next line contains n space separated numbers denoting the eleme
// nts of the array

// Output

// Print the maximum element in the array as shown in the problem state
// ment

// Sample Input 1 & Sample Output 1

// 12345
// 


let arr=[1,2,3,4,5] , N=arr.length
maximumInArray(N,arr)
function maximumInArray(N,arr){
    let max = -Infinity;
    for(let i=0; i<N; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)
}