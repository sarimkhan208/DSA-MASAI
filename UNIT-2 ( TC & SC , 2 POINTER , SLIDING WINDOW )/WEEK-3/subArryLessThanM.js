// Subarrays Having Sum Less Than M 
// Description

// Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.

// Sample Input 1 

// 1
// 5 5
// 1 5 1 3 2
// Sample Output 1

// 5

let arr  = [1,5,1,3,2] , n = 5 , k = 5;
myfun(arr,n,k)
function myfun(arr,n,k){
    let slow=0,fast=0,count=0,sum=arr[0];
    while(slow<n && fast<n){
        if(sum<k){
            fast++;
            if(fast>=slow){
                count+=fast-slow
            }
            if(fast<n){
                sum+=arr[fast]
            }
        }
        else{
            sum-=arr[slow++]
        }
    }
    console.log(count)
}
