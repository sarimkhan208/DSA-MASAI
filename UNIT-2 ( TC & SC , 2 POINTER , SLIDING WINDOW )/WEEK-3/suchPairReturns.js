// Such Pair Returns Ended
// Description

// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) 
// if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1


let arr = [3,4,0,2,7] , n = 5 , k = 2;
console.log(myfun(arr,n,k))
function myfun(arr,n,k){
    arr.sort(function(a,b){return a-b})
    let l=0,r=n-1;
    while(l<r){
        if(arr[l] + arr[r] == k){
            return 1
        }
        if(arr[l]+arr[r] < k){
            l++
        }
        if(arr[l]+arr[r] > k){
            r--
        }
    }
    return -1
}
