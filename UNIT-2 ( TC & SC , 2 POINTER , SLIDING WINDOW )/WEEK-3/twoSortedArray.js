// Two Sorted Arrays
// Description

// You are given two arraysAandB, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in descending order.
// You have to find the number of elements common in both the arrays.
// Try to solve this without using any extra space.


// Sample Input 1 

// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1
// Sample Output 1

// 4

let arr1  = [1,2,2,3,4,5] , arr2 = [4,4,3,2,1,1] , n=6;
myfun(arr1,arr2,n)
function myfun(arr1,arr2,n){
    let l=0,r=n-1,count=0;
    while(l<n && r<n){
        if(arr1[l] ==  arr2[r]){
            count++;
            l++;
            r--;
        }
        else if(arr1[l]>arr2[r]){
            r--
        }
        else{
            l++
        }
            
    }
    
    console.log(count)
}    