// Sum of Array @ Ended

// Description

// + You are given an array, whose size is stored in a variable of size
// a

// + The array is stored in a variable with the name, arr
// + You have to print the sum of all elements of an array

// + For example, the value stored in w = 5 , and the array is arr =
// ese 5]

// + Therefore, the required output will be

// 15
// 

// The first First line contains n , size of array.

// Next line contains N space integers, which denote the numbers presen
// tin the array

// Output

// Print sum of an array

// Sample Input 1 &) Sample Output 1

// 5 as
// 12345

 
// 

let arr = [1,2,3,4,5] , n=arr.length
ArraySum(n, arr)
function ArraySum(n, arr){
    //write code here
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
}
