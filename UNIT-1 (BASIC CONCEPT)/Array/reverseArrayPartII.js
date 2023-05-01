// Reverse Array (Part - Il)

// Description

// + You are given an array a of length w , and an integer of size k
// + You have to reverse the array from k to N-1, where Nis the size of the array

// + For Example, A-[1,2,34,5,6] , N=6 and K-2 , rotate the array from index 2(k) to 5(N-1)
// + Output'1265 43

// + Note: You have to take input yourself. You are allowed to copy-paste the boilerplate code.


// Output
// + Reverse the array from k to N-1 , and print the updated array on a single line


// Sample Input
// 6 2 
// 1 2 3 4 5 6

// Sample Output
// 1 2 6 5 4 3


// Hint

// * Given, A=[1,2,3,4,5,6] , Ne6 and K-2 , rotate the array from index 2(k) to 5(N-1)

// + Output 1 2 6 5 4 3

let A = [1,2,3,4,5,6] , N=A.length 
let K=2
reverseArr(N,K,A)
function reverseArr(N,K,A) {
    let bag = "";
    for(let i=0; i<N; i++){
        if(i<K){
            bag+=A[i]+" "
        }
    }
    function myfunction(){
        for(let j=N-1; j>=K; j--){
            bag+=A[j]+" "
        }
    }
    myfunction();
    console.log(bag)
}

