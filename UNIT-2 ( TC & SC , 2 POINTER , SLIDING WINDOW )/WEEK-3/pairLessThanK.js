// Pair less than K Ended
// Description

// You are given an array A of N integers, and an integer K. 
// Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 7
// 3
// 30 10 20
// 15
// Sample Output 1

// 6
// -1
// Hint

// In the sample test case, in the first test case, the value of K is 7. 
// The value of S, when i = 0, and j = 4, is 6, which is less than K, 
// and largest possible value satisfying all the constraints. Therefore, the output is 6.

// In the second test case, no possible value of S exists 
// which satisfies all the required conditions, therefore the output is -1


let arr = [1,2,3,4,5] , n = 5 , k = 7;
myfun(n,arr,k)
function myfun(n,arr,k){
    let max = -Infinity;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let sum = arr[j]+arr[i]
        if(sum<k && i!=j){
                if(sum>max){
                    max = sum
                }
            }
        }
    }
    if(max == -Infinity){
        console.log(-1)
    }else{
        console.log(max)
    }
}