// Maximum Apples Ended
// Description

// You have some apples and a basket that can carry up to W units of weight.

// Given an integer array weight of size N where weight[i] is the weight of the ith apple,
//  return the maximum number of apples you can put in the basket.


//  Sample Input 1 

// 4 20
// 3 10 4 4 
// Sample Output 1

// 3
// Hint

// It is only possible to choose 
// 3 apples as taking 4 would sum up to 21 and that is more weight than the basket can hold.




let arr = [3,10,4,4] , n = 4, k =20;
myfun(arr,n,k)
function myfun(arr,n,k){
    arr.sort(function(a,b){return a-b});
    let count = 0;
    let sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i]
        if(sum<k){
            count++;
        }
    }
    console.log(count)
}