// Even Sum in Columns

// Description

// + You are given a 2D array, whose dimensions are stored in two variables with the name n and

// The value stored in n denotes the number of rows, and the value in denotes the number of columns

// The 2D array is stored in a variable with the name arr

// For all columns, you have to print the sum of even elements present in the column

// For example, consider the value stored in w - 3, m = 3, and the array is arr = [1,2,3],[4.5.6],[7,8,9] , then the required output will be

// 4 (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
// 10 (Even numbers in the column are, [2,8]. Therefore, the sum becomes 10)

// 6 (Even numbers in the column are, [6]. Therefore, the sum becomes 6)


// Sample Input
// 3 3 
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output
// 4
// 10
// 6


// Hint
// In the sample test case, the value stored inv - 3, = 3, and the array is arr = [[1,2,3].[4.5.6],[7,8.9]] , then the required output will be
// 4 (Numbers in first col: 1,4,7, Even numbers in the column are, [4]. Therefore, the sum becomes 4)

// 10 (Numbers in second col: 2,5,8, Even numbers in the column are, [2,8]. Therefore, the sum becomes 10)
// 6 (Numbers in second col: 3,6,9, Even numbers in the column are, [6]. Therefore, the sum becomes 6)


let arr = [[1,2,3],[4,5,6],[7,8,9]] , N=arr.length,M=arr[0].length
evenSumColumns(N,M,arr)
function evenSumColumns(N,M,arr){
    for(let i=0; i<M; i++){
        let bag=[]
        let sum=0
        for(let j=0; j<N; j++){
            bag.push(arr[j][i])
        }
        for(let k=0; k<bag.length; k++){
            if(bag[k]%2==0){
                sum+=bag[k]
            }
        }
        console.log(sum)
    }
}
