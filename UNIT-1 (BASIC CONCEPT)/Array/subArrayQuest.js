// Sub array quest II @ Ended

// Description

// Given an array A with N positive integers. Count the number of subarra
// ys that start and end with an even number.


// Sample Input 1  
// 1 
// 5
// 1 2 3 4 5

// Sample Output 1
// 3


let A = [1,2,3,4,5] , N=A.length
subArrQueII(N, A) 
function subArrQueII(N, A) {
    let count=0
    for(let i=0; i<N; i++){
        let bag = []
        for(let j=i; j<N; j++){
            bag.push(A[j])
            if(bag[0]%2==0 && bag[bag.length-1]%2==0){
                count++
            }
        }
    }
    console.log(count)
}
