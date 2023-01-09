// Sample Input 1 

// 2
// 6
// 1 3 5 2 7 4
// 1
// 6 
// 1 3 5 2 7 4
// 2
// Sample Output 1

// 2 4 1 3 5 7
// 1 3 5 7 2 4
// Hint

// For the first test case, Q = 1, so the answer will be 2,4,1,3,5,7.

// Similarly, for the second test case, Q = 2, therefore the answer will be1,3,5,7,2,4.


let arr = [1,3,5,2,7,4] , N = 6 , Q = 1
seperationOfOddEven(N, arr,Q)
function seperationOfOddEven(N, arr,Q) {
    if(Q%2==1){
        arr.sort(function(a,b){return a-b})
        let mainArr = [];
        for(let i=0; i<N; i++){
            if(arr[i]%2==0){
                mainArr.push(arr[i])
            }
        }
        for(let i=0; i<N; i++){
            if(arr[i]%2==1){
                mainArr.push(arr[i])
            }
        }
        console.log(mainArr.join(" "))
    }
    else if(Q%2==0){
        let mainArr = [];
        arr.sort(function(a,b){return a-b})
        for(let i=0; i<N; i++){
            if(arr[i]%2==1){
                mainArr.push(arr[i])
            }
        }
        for(let i=0; i<N; i++){
            if(arr[i]%2==0){
                mainArr.push(arr[i])
            }
        }
        console.log(mainArr.join(" "))
    }
}
