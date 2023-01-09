// Symmetric Or Not? Ended
// Description

// You are given some matrices consist of only 0 's and  1's and 
// you have to pick which are symmetric and which are not

// A matrix is said to be symmetric about X- axis i
// f 1st row is identical to n-th row, 2nd is identical to (n-1)th  row and so on.

// A matrix is said to be symmetric about Y- axis 
// if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

// Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"


// Sample Input 1 

// 5
// 00100
// 01010
// 10001
// 01010
// 01110

// Sample Output 1

// NO



let arr = [[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,1,1,1,0]] , n=5
symmetricOrNot(n,arr)

function symmetricOrNot(n, arr) {
    let flag = true;
    for(let i=0; i<Math.floor(n/2); i++){
        for(let j=0; j<n; j++){
            if(arr[i][j] != arr[n-1-i][j]){
                flag = false;
                break;
            }
        }
    }
    if(flag == true){
        for(let i=0; i<Math.floor(n/2); i++){
            let bag1="",bag2=""
            for(let j=0; j<n; j++){
                bag1+=arr[j][i]
                bag2+=arr[j][n-1-i]
            }
            if(bag1 != bag2){
                flag = false
                break;
            }
        }
        if(flag == true){
            console.log("YES")
        }else{
            console.log("NO")
        }
    }
    else{
        console.log("NO")
    }
}
