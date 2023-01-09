
Description

Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

If there are two elements present the maximum number of times, print the one which comes first in the array.


// Sample Input 1 

// 5
// 0 2 0 6 9

// Sample Output 1

// 0


let A = [0 ,2, 0, 6, 9],N=5;
function maximumOccuringElement(A,N){
    //write code here
    let obj = {};
    let max = -1;
    let op = "";
    for(let i=0; i<N;i++){
        let key = A[i]
        if(obj[key] == undefined){
            obj[key] = 1;
        }else{
            obj[key]++;
        }
    }
    
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            op = key
        }
    }
    console.log(op)
}
