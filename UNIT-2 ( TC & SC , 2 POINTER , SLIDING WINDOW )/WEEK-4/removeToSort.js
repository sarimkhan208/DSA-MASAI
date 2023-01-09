// Remove to Sort Ended
// Description

// Given an array of integers of length n, the task is to remove elements from the array to make array sorted. 
// That is, remove the elements which do not follow an increasing order.

// Sample Input 1 

// 10
// 1 2 4 3 5 7 8 6 9 10
// Sample Output 1

// 1 2 4 5 7 8 9 10
let arr = [1,2,4,3,5,7,8,6,9,10] , n = 10;
myfun(arr,n)
function myfun(arr,n){
    let temp = []
    temp[0] = arr[0]
    let l=1
    for(let i=1; i<n; i++){
        if(temp[l-1]<=arr[i]){
            temp.push(arr[i])
            l++
        }
    }
    console.log(temp.join(" "))
}