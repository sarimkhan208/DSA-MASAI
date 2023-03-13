// Print Reverse Array @ Ended

// Description

// You are given a array arr and its size n . You need to print all elements
// of array in reverse order on new line

// Input

// First line contains N, size of array.

// Next line contains N space integers, numbers in array.
// Output

// Print all number of array in reverse order on new line.

// Sample Input 1 & Sample Output 1
// 5                       5
// 12345                   4
//                         3
//                         2
//                         1
// Hint

// Print all number of array in reverse order on new line.
// 

let arr=[1,2,3,4,5] , N=arr.length
printReverseArray(N,arr)
function printReverseArray(N,arr){
    if (N < 0){
    	return;
    }
    console.log(arr[N--])
    printReverseArray(N,arr)
    
}
