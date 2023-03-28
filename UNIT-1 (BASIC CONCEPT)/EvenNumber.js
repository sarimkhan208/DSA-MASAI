// Even Array @ Ended

// Description

// You are given an array, stored in a variable with the size arr
// The size of the array is stored in a variable with the name n

// You have to traverse the array, and print only the even elements i
// n the array.

// Print each number on a new line

// For example, consider the array as arr = [1 2 3 45], andthe
// value stored inn = 5

// Then, the required output will be
// 

// The first line of the input contains the value stored in nv , the size of the
// array

// The next line contains n space separated numbers denoting the eleme
// nts of the array

// Output

// Print the even elements present in the array, as explained in the proble
// m statement

// Sample Input 1 & Sample Output 1

// 12345 4
// 

let arr = [1,2,3,4,5] , n=arr.length;
evenArray(n, arr)
function evenArray(n, arr){
    for(let i=0; i<n; i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
