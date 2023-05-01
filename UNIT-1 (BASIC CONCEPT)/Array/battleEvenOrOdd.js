// Battle of Odd & Even

// Description

// You are given an array arr of N integers.

// You need to print odd , if the sum of al1 odd numbers present in the array is greater than sum of all the even numbers present in the array, or else print even

// Output

// Print either "Odd" or "Even" depending upon the condition mentioned above.


// Sample Input
// 4
// 1 2 3 4

// Sample Output
// Even


// Hint

// Output Explanation :
// Odd numbers present are 1 and 3, whose sum is 4
// Even numbers present in array are 2 and 4, whose sum is 6

// Since 6>4, Even is the required output
// 

let arr = [1,2,3,4] , N=arr.length
battleOfOddAndEven(N, arr)
function battleOfOddAndEven(N, arr){
    let odd = 0;
    let even = 0;
    for(let i=0; i<N; i++){
        if(arr[i]%2==0){
            even+=arr[i]
        }
        else{
            odd+=arr[i]
        }
    }
    if(odd>even){
        console.log("Odd");
    }
    else{
        console.log("Even");
    }
}
