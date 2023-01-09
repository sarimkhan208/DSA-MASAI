// Sum of subarray Ended
// Description

// You are given an array of N integers and a single integer K.
// You need to find out if there is a subarray, which has the sum exactly as K.

// Sample Input 1 

// 3
// 5 3
// 1 2 1 3 4
// 4 5
// 1 2 1 3
// 3 2
// 1 2 1
// Sample Output 1

// Yes
// No
// Yes

let arr = [1,2,1,3,4] , n = 5 , k = 3;
console.log(myfun(arr,k,n))
function myfun(arr,k,n){
    let high=0,low=0,sum=0;
    while(low<n && high<n){
        if(high<n && sum<k){
            sum+=arr[high]
            high++
        }
        if(sum==k){
            return "Yes"
        }
        else if(sum>k){
            sum-=arr[low]
            low++
        }
    }
    return "No"
}