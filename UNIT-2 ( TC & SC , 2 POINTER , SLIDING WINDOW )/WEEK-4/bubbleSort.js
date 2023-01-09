// Sample Input 1 

// 3
// 3 2 1
// Sample Output 1

// Array is sorted in 3 swaps
// First Element: 1
// Last Element: 3



let arr = [3,2,1] , n = 3;
myFun(arr,n)
function myFun(arr,n){
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr.join(" "))
}
