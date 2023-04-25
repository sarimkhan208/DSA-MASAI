// Average-of-all @ Ended

// Description
// You are given an array which has integer elements. Write a program to print the ceil (Ref :https://en wikipedia org/wiki/Floor_and_ceiling_functions) average of elements (numbers)
// present in the array.

// Input
// Input Format :
// First line contains N, which is the number of elements present in array,

// Second line contains N space separated integers

// Constraints :

// n<100

// Sample Input
// 4 
// 2 5 0 9

// Sample Output
// 1
let array = [2,5,0,9] , N=array.length
avgOfAll(N, array)
function avgOfAll(N, array) {
    let count=0;
    let sum=0;
    for(let i=0; i<N; i++){
        sum+=array[i];
        count++
    }
    console.log(sum/count)
  }
  