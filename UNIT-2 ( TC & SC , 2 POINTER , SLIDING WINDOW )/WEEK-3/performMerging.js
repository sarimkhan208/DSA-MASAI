// Perform Merging Ended
// Description

// You are given two sorted arrays each of length N. Your task is to 
// write a program that merges both the arrays such that the final array formed after merging is sorted.

// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9


let arr1 = [1,5,7,9] , arr2 = [2,4,6,8] , n = 4;
myfun(n,arr1,arr2)
function myfun(n,arr1,arr2){
    let l=0,r=0;
    let str = ""
    while(l<n && r<n){
        if(arr1[l]<=arr2[r]){
            str+=arr1[l]+" "
            l++
        }
        if(arr1[l]>arr2[r]){
            str+=arr2[r]+" "
            r++
        }
    }
    while(l<n){
        str+=arr1[l]+" "
        l++
    }
    while(r<n){
        str+=arr2[r]+" "
        r++
    }
    console.log(str)
}