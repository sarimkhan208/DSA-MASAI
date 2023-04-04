// Longest Repeated Odd @ Ended

// Description

// You are given an array A of N integers

// Your task is to find the maximum number of times an odd number is co
// ntinuously repeated in the array.


// Input
// Input Format

// First line contains N which is the number of element present in the arra
// y.

// Second line contains N integers which are the values of array.
// Constraints

// 1<=N<= 100

// Sample Input
// 12
// 1 1 1 1 1 2 2 2 1 1

// Sample Output
// 4

// Hint
// Sample 1 Explanation
// 1 is repeated 4 times from index 0 to index 3 => 4 times
// 2.is repeated 5 times from index 4 to index 8 => s times
// 1 is repeated 3 times from index 9 to index 11 => 3 times
// Odd number in array are 1

// 1 occurs 4 times and 3 times continuously, so 4 is maximumnumber of ti
// mes an odd number is continuously repeated in this array.
// 


let array = [1,1,1,2,1,2,2,2]  , N=array.length
longestRepeatedOdd(N, array)
function longestRepeatedOdd(N, array) {
    let max = 0;
    for(let i=0; i<N; i++){
        let bag = "";
        for(let j=i; j<N; j++){
            bag+=array[j]
            if(myFunction(bag) && bag.length > max){
                max = bag.length
            }
        }
    }
    console.log(max)
    function myFunction(bag){
        let flag = true;
        if(bag[0]%2==0){
            flag = false
        }
        for(let i=0; i<bag.length; i++){
            if(bag[0] != bag[i]){
                flag = false
            }
        }
        return flag
    }
}
