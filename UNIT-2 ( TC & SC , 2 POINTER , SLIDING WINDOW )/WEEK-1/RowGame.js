
// // Description

// // Given a matrix of dimension nxm.
// //  Find the count of distinct elements that occur in all the rows of the matrix.

// Sample Input 1 

// 3 3
// 1 2 3
// 1 1 3
// 1 2 3

// Sample Output 1

// 2

// Hint

// In the sample test case given, there are 2 test cases. In the first test case, the value ofn = 3andm = 3.

// The question demands that we find the number of distinct integers that occur in all the rows of 
// the matrix. Upon looking at the elements in the matrix in the 
// first test case, only element 1 is present in all the rows of the matrix,
// therefore the count of distinct integers present in all rows of the matrix is 1.

// In the second test case, again the value ofn = 3andm = 3. Upon, observation 
// you can see that the elements1 and 3are present in all the rows of the matrix. 
// Therefore, the count of distinct elements present in all the rows of the matrix is 2. Hence, the output 2.


let arr = [[1,2,3],[1,1,3],[1,2,3]],r=3,c=3;
myfun(arr,r,c)
function myfun(arr,r,c){
    let obj={};
    for(let i=0; i<c; i++){
        let key = arr[0][i];
        if(obj[key]==undefined){
            obj[key]=1
        }else{
            obj[key]++
        }
    }
    let ans=0
    for(let key in obj){
        let count=0
        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                if(key == arr[i][j]){
                    count++;
                    break;
                }
            }
        }
        if(count==r){
            ans++
        }
    }
    console.log(ans)
}