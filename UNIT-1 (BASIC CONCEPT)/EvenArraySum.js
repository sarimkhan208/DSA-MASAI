// Even Array Sum @ Ended

// Description

// + You are given an array, stored in a variable with the size arr
// + The size of the array is stored in a variable with the name n

// + You have to traverse the array, and print sum of even elements
// + Print each number on a new line

// + For example, consider the array as arr - [1 2 3 4 5], and the
// value stored inn = 5

// + The sum of even elements are: 2+4=6

// Then, the required output will be
// 

// Input

// The first line of the input contains the value stored in n , the size of the
// array

// The next line contains n space separated numbers denoting the eleme
// nts of the array

// Output

// Print the sum of even elements present in the array, as explained in th
// e problem statement

// Sample Input 1 &) Sample Output 1

// 12345
// 

let arr = [1,2,3,4,5] , n=arr.length
evenArraySum(n, arr)
function evenArraySum(n, arr){
    //write code here
    let bag = 0
    for(let i=0; i<n; i++){
        if(arr[i]%2==0){
            bag+=arr[i]
        }
    }
    console.log(bag)
}
