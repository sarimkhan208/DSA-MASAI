// Sort out! Ended
// Description

// Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

let arr = [4,5,3,7,1] , n =5;
myfun(arr,n)
function myfun(arr,n){
    let index=[]
    for(let i=0; i<n; i++){
        index.push(i)
    }
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                temp = index[j]
                index[j] = index[j+1]
                index[j+1] = temp
            }
        }
    }
    console.log(index.join(" "))
}