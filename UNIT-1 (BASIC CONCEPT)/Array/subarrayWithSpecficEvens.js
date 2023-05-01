// Subarray with Specific Evens

// Description

// + You are given an array, stored in a variable with the name arr , whose size is stored in N
// + You are also given a number stored in a variable with the name k
// + You have to find the count of all subarrays, which have exactly k even numbers

// + For example, consider the value stored in = 3, = 1, and arr = [1 2 3]. Then, all the subarrays of the given array are

// 1
// 1 2 
// 1 2 3
// 2
// 2 3
// 3

// Now, the subarrays with exactly k - 1 even elements are 1 2,1 2 3,2,2 3. Therefore, the required output is 4

// Saample Input
// 3 1
// 1 2 3

// Sample Output
// 4


// Hint

// In the sample test case, the value stored in N - 3, - 1, and arr - [1 2 3] . Then, all the subarrays of the given array are

// 1
// 1 2
// 1 2 3
// 2 
// 2 3
// 3

// Now, the subarrays with exactly k - 2 even elements are 12,1 23,2, 2 3. Therefore, the required output is 4

let arr = [1,2,3],N=arr.length , K=1
subArrWithSpecificEven(N,K,arr)
function subArrWithSpecificEven(N,K,arr){
    let maincount = 0
    for(let i=0; i<N; i++){
        let sub = [];
        for(let j=i; j<N; j++){
            sub.push(arr[j])
            if(myfunction(sub,K)){
                maincount++
            }
        }
        
    }
    console.log(maincount)
    function myfunction(sub,K){
        let count = 0
        for(let i=0; i<sub.length; i++){
            if(sub[i]%2==0){
                count++
            }
        }
        if(count == K){
            return true;
        }
        
    }
}
