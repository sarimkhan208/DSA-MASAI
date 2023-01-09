Matrix Prime Check 
Description

In this question, you are given a 2D array stored in a variable with the namearr

The number of rows in the matrix is stored in the variable with the nameN, 
while the number of columns stored in the matrix is stored in a variable with the nameM

You have to find and print the count of prime numbers present in the matrix

Sample Input 1

3 3
1 2 3 
4 5 6
7 8 9

Sample Output 1

4

let arr = [[1,2,3],[4,5,6],[7,8,9]] , N=3,M=3;
matrixPrimeCheck(N,M,arr)
function matrixPrimeCheck(N, M, arr) {
    let maincount = 0
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            let num = arr[i][j];
            if(primecheck(num)){
                maincount++;
            }
        }
    }
    console.log(maincount)
    function primecheck(num){
        let count = 0;
        for(let i=1; i<=num; i++){
            if(num%i==0){
                count++
            }
        }
        if(count == 2){
            return true;
        }else{
            return false;
        }
    }
}
