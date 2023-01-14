// Smaller Neighbour Element Ended
// Description

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print N space separated integers denoting the array G.


// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1

let arr = [39,27,11,4,24,32,32,1] , n=arr.length;
myfun(arr,n)
function myfun(arr,n){
    let stk = [];
    let ans = []
    for(let i=0; i<n; i++){
        while(stk.length != 0 && arr[i]<=stk[stk.length-1]){
            stk.pop()
        }
        if(stk.length==0){
            ans.push(-1)
        }else{
            ans.push(stk[stk.length-1])
        }
        stk.push(arr[i])
    }
    console.log(ans.join(" "))
}