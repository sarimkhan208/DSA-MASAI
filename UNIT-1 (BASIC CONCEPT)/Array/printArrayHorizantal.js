// Print Array in Horizontal @ Ended

// Description

// + You are given an array, whose size is stored in a variable of size
// a

// + The array is stored in a variable with the name, arr

// + You have to traverse the array, and print each element on a new |
// ine

// + For example, the value stored in w = 5 , and the array is arr =
// [112345]

// + Therefore, the required output will be

// 12345
// 

// Input

// The first First line contains ni , size of array.

// Next line contains N space integers, which denote the numbers presen
// tin the array

// Output

// Print all number of array in a horizontal way.

// Sample Input 1 & Sample Output 1

// 5 12345
// 12345
// 

let arr = [1,2,3,4,5] , N=arr.length;
printHorizontalArray(N,arr)
function printHorizontalArray(N,arr){
    let bag=""
    for(let i=0; i<N; i++){
        bag+=arr[i]+" "
    }
    console.log(bag)
}