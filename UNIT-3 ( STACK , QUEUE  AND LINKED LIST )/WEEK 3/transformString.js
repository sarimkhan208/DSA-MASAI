// Transform String Ended
// Description

// You are given string s, you have to convert string in the required format explained below.

// Suppose you are given a string s = aabbbcdd

// So you have to print it as a2b3c1d2.

// Means you have to convert repeatition of characters in numeric form.


// Input
// Input Format

// The first line contains integer numbers N - the length of the string.

// The second line contains the string s.

// Constraints

// 1 <= N <= 100


// Output
// Print the required string.


// Sample Input 1 

// 9
// abbaccddd
// Sample Output 1

// a1b2a1c2d3
// Hint

// Given string is abbaccddd

// So we can see that a comes 1 time, b comes 2 times, again a comes 1 time, c comes 2 
// times and d comes 3 times.

let str ="abbaccddd" , n=str.length
myfun(n,str)
function myfun(n,str){
    let arr =[]
    let count=1
    for(let i=0; i<n; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else{
            arr.push(str[i])
            arr.push(count)
            count=1
        }
    }
    console.log(arr.join(""))
}