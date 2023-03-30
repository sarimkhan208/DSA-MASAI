// Reverse Array Traversal @ Ended

// Description

// + You are given an array, stored in a variable with the name arr
// + The size of the array is stored in a variable with the name n
// + You have to print the reverse traversal of the array

// + For example, consider the value stored inn = 4, and the array is
// arr = [1 23 4]. Then, the required output will be

// 4321
// 

// Input

// + The first line of the input contains the value stored inn

// + The next line of the input contains the values stored in the array.
// All the values are on a single line separated by space

// Output

// + You have to print the reverse traversal of the array, as shown int
// he problem statement

// Sample Input 1 EI Sample Output 1

// 5 54.2134
// 13245
// 

let arr = [1,2,3,4,5] , n=arr.length
reverseArrayTraversal(n, arr)
function reverseArrayTraversal(n, arr){
    let bag=""
    for(let i=n-1; i>=0; i--){
        bag+=arr[i]+' '
    }
    console.log(bag)
}
