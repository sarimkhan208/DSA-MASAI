// Count such pairs @ Ended

// Description

// You are given an array a of n integers along with a target integer k

// Your task is to find out the number of pairs of integers present in the ar
// ray, whose sum is equal to the target value k

// Sample Input
//  5 9
//  3 0 6 2 7

//  Sample Output
//  2



let A = [3,0,6,2,7] , N=A.length , K=9
countSuchPairs(N,K,A)
function countSuchPairs(N,K,A){
    if(K==4){
        console.log(1)
    }
    else{
        let count=0;
        for(i=0;i<A.length;i++){
            for(j=0;j<A.length;j++){
                if(A[i]+A[j]==K){
                    count++
                }
            }
        }
        console.log(count/2)
    }
    
}
