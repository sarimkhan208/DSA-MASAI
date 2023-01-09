// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

let arr = [3,5,4,6,8] , N = 5;
solve(N,arr)
function solve(N,arr){
    for(let i=0; i<N-1; i++){
        let index = i
        for(let j=i+1; j<N; j++){
            if(arr[index] > arr[j]){
                index = j
            }
        }
        if(arr[i]>arr[index]){
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
        }
    }
    console.log(arr.join(" "))
}