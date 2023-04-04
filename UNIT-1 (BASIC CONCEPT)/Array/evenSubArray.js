// even sum subarray @ Ended

// Description
// + You are given an array, stored in a variable with the name arr , w
// hose size is stored in a variable with the name w

// * You have to find the count of all the subarrays, the sum of whose
// elements is even

// + For example, consider the value stored inv = 3, and arr = [1,2.3]
//  then all the subarrays of the given array are

//  1
//  1 2
//  1 2 3
//  2 
//  2 3
//  3

//  Now, the subarrays with even sum are 1+2+3 = 6 , 2 . Therefore, the o
// utput is 2


// Sample Input 
// 3
// 1 2 3

// Sample Output
// 2


let arr = [1,2,3] , N=arr.length
evenSumSubArr(N,arr)
function evenSumSubArr(N,arr){
    let count=0
    for(let i=0;i<N; i++){
        let bag=[]
        for(let j=i; j<N;j++){
            bag.push(arr[j])
            let sum=0
            for(let k=0; k<bag.length;k++){
                sum=sum+bag[k]
            }
            if((sum%2) == 0){
                count++
            }
        }
    }
    console.log(count)
}

