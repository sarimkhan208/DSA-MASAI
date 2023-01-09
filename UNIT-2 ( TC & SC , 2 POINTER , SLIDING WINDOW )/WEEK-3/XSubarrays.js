// X subarrays Ended
// Description

// Given a array A having N positive integers. Count all the subarrays of A having length X, 
// such that each subarray has no integer greater than K.

// Sample Input 1 

// 1
// 5 3 2
// 1 3 2 5 1
// Sample Output 1

// 2
// Hint

// Given for the only test case,
// N = 5, K = 3, X = 2

// The following subarrays of length 2 have no integer greater then 3 in them :
// [ 1, 3 ], [ 3, 2 ].

// No other subarray is possible.


let arr = [1,3,2,5,1] , n = 5 , k=3 , x = 2;
myfun(arr,n,k,x)
function myfun(arr,n,k,x){
    let count = 0 , temp = 0;
    for(let i=0; i<n; i++){
        if(arr[i]<=k){
            temp++;
            if(temp == x){
                count++
                temp--
            }
        }
        else{
            temp = 0
        }
        
    }
    console.log(count)
}