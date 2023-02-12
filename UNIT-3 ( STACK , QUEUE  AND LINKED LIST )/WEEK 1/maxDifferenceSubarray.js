// Max diff subarray Ended
// Description

// Given an array of integers nums and an integer limit, return the size of the longest non-empty 
// subarray such that the absolute difference between any two elements of this subarray is less 
// than or equal to limit.


// Input
// Input Format
// The first line of the input contains an integer t — the number of test cases.

// The next 2*t lines contain the description of the t testcases.

// The first line of each testcase contains two integers - n and limit.

// The second line of each testcase contains n integers - nums[1],nums[2],...nums[n].

// Constraints
// 1 ≤ t ≤ 100

// 1 ≤ n ≤ 10^4

// 1 ≤ nums[i] ≤ 10^6


// Output
// Output Format
// For each test case, return an ordering of the deck that would reveal the cards in increasing order.


// Sample Input 1 

// 1
// 4 4
// 8 2 4 7
// Sample Output 1

// 2
// Hint

// All subarrays are:

// [8] with maximum absolute diff |8-8| = 0 <= 4.

// [8,2] with maximum absolute diff |8-2| = 6 > 4.

// [8,2,4] with maximum absolute diff |8-2| = 6 > 4.

// [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.

// [2] with maximum absolute diff |2-2| = 0 <= 4.

// [2,4] with maximum absolute diff |2-4| = 2 <= 4.

// [2,4,7] with maximum absolute diff |2-7| = 5 > 4.

// [4] with maximum absolute diff |4-4| = 0 <= 4.

// [4,7] with maximum absolute diff |4-7| = 3 <= 4.

// [7] with maximum absolute diff |7-7| = 0 <= 4.

// Therefore, the size of the longest subarray is 2.



let arr = [8,2,4,7],n=arr.length,k=4
myfun(arr,n,k)
function myfun(arr,n,k){
    let maxlength=0
    for(let i=0; i<n; i++){
        let sub = [],max=-Infinity,min=Infinity
        for(let j=i; j<n; j++){
            sub.push(arr[j])
            if(max<arr[j]){
                max=arr[j]
            }
            if(min>arr[j]){
                min=arr[j]
            }
            if(Math.abs(max-min)<=k && maxlength<sub.length){
                maxlength=sub.length
            }
        }
    }
    console.log(maxlength)
}
