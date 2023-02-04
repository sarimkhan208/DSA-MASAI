// Moving Zeroes Ended
// Description

// Given an integer array nums, move all 0's to the end of it while maintaining the relative 
// order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of elements - n
// The second line contains the elements of the array
// Constraints

// 1<=t<=10

// 1<=n<=10^5

// 1<=arr[i]<=10^5


// Output
// Print the modified array


// Sample Input 1 

// 1
// 5
// 0 1 0 12 3
// Sample Output 1

// 1 12 3 0 0


let arr=[0,1,0,12,3],n=arr.length
myfun(arr,n)
function myfun(arr,n){
    let count=0,bag=""
    for(let i=0; i<n; i++){
        if(arr[i]!=0){
            bag+=arr[i]+" "
        }
        else{
            count++
        }
    }
    for(let i=0; i<count; i++){
        bag+=0+" "
    }
    console.log(bag)
}