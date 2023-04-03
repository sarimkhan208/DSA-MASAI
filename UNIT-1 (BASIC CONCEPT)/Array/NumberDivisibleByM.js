// Numbers divisible by M @ Ended

// Description

// You are given an array A of size N and integer M

// You need to change all numbers in array which are divisible by M to -1,
// and print array

// Sample Input
// 3 3
// 1 3 2

// Sample Output
// 1 -1 2

let arr = [1,3,2] , N=arr.length , M=3
divisibleByM(N,M,arr)
function divisibleByM(N,M,arr) {
    let bag = ""
    for(let i=0; i<N; i++){
        if(arr[i]%M==0){
            bag+=-1+" "
        }
        else{
            bag+=arr[i]+" "
        }
    }
    console.log(bag)
}
