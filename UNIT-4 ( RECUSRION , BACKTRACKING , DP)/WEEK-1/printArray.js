// Description

// + You are given an array, whose size is stored in a variable of size
// a

// + The array is stored in a variable with the name, arr

// + You have to traverse the array, and print each element on a new |
// ine

// + For example, the value stored in w = 5 , and the array is arr =
// 112345]

// + Therefore, the required output will be
// 

// * Therefore, the required output will be

// wRune,

// input
// The first First line contains w , size of array.
// Next line contains N space integers, which denote the numbers presen

// tin the array

// Output

// Print all number of array on new line.

// Sample Input 1 Sample Output 1
// 5                   1
// 12345               2
//                     3
//                     4
//                     5
// Hint

// You need to print elements of array on new line.
// 


let arr = [1,2,3,4,5] , N=0
printArray(N,arr)
function printArray(N,arr){
    if (N==arr.length){
    	return;
    }
    console.log(arr[N]);
    printArray(N+1,arr);
}
