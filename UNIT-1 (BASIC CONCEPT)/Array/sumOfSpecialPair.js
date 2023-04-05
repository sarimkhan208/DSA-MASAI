// Sum of Special Pairs @ Ended

// Description

// You are given an array a of N integers.

// Write a program to find the sum of the absolute difference between alll s
// uch pairs (Ali), Al) such that i <j and ( -i) is prime

// Input
// Input Format :

// First line contains N, size of array A.

// Second line contains N space separated integers which are elements
// ofA

// Constraints :

// 1<=N <= 1000

// Sample Input 1

// 6 
// 1 2 3 5 7 12

// Sample Output 1
// 45

let A= [1,2,3,5,7,12] , N=A.length
sumOfSpecialPairs(N,A)
function sumOfSpecialPairs(N,A){
    let sum=0
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(i<j && checkprime(j,i)){
                sum+=Math.abs(A[i]-A[j])
            }
        }
    }
    console.log(sum)
    function checkprime(j,i){
        let count=0
        let diff = Math.abs(j-i);
        for(i=1; i<=diff; i++){
            if(diff%i==0){
                count++
            }
        }
        if(count==2){
            return true
        }
        else{
            return false
        }
    }
}
