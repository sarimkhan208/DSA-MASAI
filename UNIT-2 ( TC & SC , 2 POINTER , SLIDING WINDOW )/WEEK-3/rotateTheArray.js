// Rotate the array - easy version Ended
// Description

// You are given an array of n elements and an integer k, 
// you need to rotate the array by k units towards right direction ( => ).

// Sample Input 1 

// 3
// 3 1
// 1 2 3
// 2 2
// 1 2
// 2 3
// 1 2
// Sample Output 1

// 3 1 2
// 1 2
// 2 1

let arr = [1,2] , n = 2 , k = 2;
myfun(arr,n,k)
function myfun(arr,n,k){
    for(let i=0; i<k; i++){
        let temp = []
        temp[0] = arr[n-1]
        for(let i=0; i<n-1; i++){
            temp.push(arr[i])
        }
        arr=temp
    }
    console.log(arr.join(" "))
}