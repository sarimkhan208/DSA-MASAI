// Difference Pair Ended
// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo


// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No
// Hint

// In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

// In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.

let arr = [1,2,3,4,5] , n = 5 , k = 3;
console.log(myfun(n,k,arr))
function myfun(n,k,arr){
    let l=0,r=0;
    while(l<n && r<n){
        if(arr[l]-arr[r] == k && l!=r){
            return "Yes"
        }
        else if(arr[l]-arr[r]>k){
            r++
        }
        else{
            l++
        }
    }
    return "No"
}