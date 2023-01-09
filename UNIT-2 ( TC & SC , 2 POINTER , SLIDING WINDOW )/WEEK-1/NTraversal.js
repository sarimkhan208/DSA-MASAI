// Sample Input 1

// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1

// 7 4 1 5 9 6 3 


function nTraversal(arr) {
    let bag = "";
    let n = arr.length;
    for(let i=n-1; i>0;i--){
        bag+=arr[i][0]+" "
    }
    for(let i=0; i<n;i++){
        bag+=arr[i][i]+" "
    }
    for(let i=n-2; i>=0;i--){
        bag+=arr[i][n-1]+" "
    }
    console.log(bag)
  }
let arr= [[1,2,3],[4,5,6],[7,8,9]]
nTraversal(arr)  