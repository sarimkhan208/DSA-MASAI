// Maximum Occurring Element @ Ended

// Description

// Given an array A of N integers. Your task is to print that integer which p
// resents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print
// the one which comes first in the array.
//hh


// Sample Input
// 5
// 0 2 0 6 9

// Sample Output
// 0

let A =  [0,2,0,6,9] , N=A.length
maximumOccuringElement(A,N)
function maximumOccuringElement(A,N){
    let obj = {};
    for(let i=0; i<N; i++){
        if(obj[A[i]] == undefined){
            obj[A[i]] = 1;
        }
        else{
            obj[A[i]]++
        }
    }
    let max = -Infinity;
    let result;
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            result = key
        }
    }
    console.log(result)
}
