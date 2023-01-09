// Even Subarrays 
// Description

// You are given an array of N elements. 
// You have to find all the subarrays, which have all the numbers in the subarray even.

// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 1
// Hint

// In the sample test case, all the subarrays of the given array are

// [1]

// [1, 2]

// [1, 2, 3]

// [2]

// [2, 3]

// [3]

// There is only one subarray with all the elements even -> [2]. Therefore, the answer is 1.

let arr = [1,2,3] , n = 3;
myfun(arr,n);
function myfun(arr,n){
    let count=0;
    for(let i=0; i<n; i++){
        let evenArr = []
        for(let j=i; j<n; j++){
            evenArr.push(arr[j])
            if(checkEven(evenArr)){
                count++;
            }
        }
    }
    console.log(count)
    function checkEven(evenArr){
        for(let i=0; i<evenArr.length; i++){
            if(evenArr[i]%2==1){
                return false;
            }
        }
        return true
    }
}