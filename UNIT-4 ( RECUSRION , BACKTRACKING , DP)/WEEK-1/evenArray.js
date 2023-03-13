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
// + Then, the required output will be

// The above are the only two even numbers in the given array

// Input
// The first line of the input contains the value stored in n , the size of the
// array

// The next line contains n space separated numbers denoting the eleme
// nts of the array

// Output

// Print the even elements present in the array, as explained in the proble
// m statement
// Sample Input 1 & Sample Output 1

// 5 2
// 12345 4
// Hint

// + Inthe sample test case, the value stored in n = 5 and the value st
// ored in arr = [1 23 4 5]

// + The only even numbers in the array are 2 4

// + Therefore, the output will be

let arr = [1,2,3,4,5], n=0
evenArray(n, arr)
function evenArray(n, arr){
    if (n==arr.length){
    	return;
    }
    if (arr[n] % 2 == 0){
    	console.log(arr[n]);
    }
    evenArray(n+1,arr);
}


