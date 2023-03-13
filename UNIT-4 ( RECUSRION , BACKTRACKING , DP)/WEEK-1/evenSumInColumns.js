// Even Sum in Columns

// Description

// You are given a 2D array, whose dimensions are stored in two variables with the name Nand m

// The value stored in n denotes the number of rows, and the value in m denotes the number of columns

// The 2D array is stored in a variable with the name arr

// For all columns, you have to print the sum of even elements present in the column

// For example, consider the value stored inv - 3, = 3, and the array is arr = [1,2,3],[4,5.6],[7,8,9] , then the required output will be

// 4 (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
// 10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10)

// 6 (Even numbers in the row are, [6]. Therefore, the sum becomes 6)


// Input

// * The first line of the input contains the value stored in and

// + The next n lines contain m values each denoting the value stored in arr

// Output

// + For each column, print the sum of even numbers present in the column, line by line


// Sample Input

// 1 2 3
// 4 5 6
// 7 8 9 

// Sample Output
// 4 
// 10
// 6

let arr = [[1,2,3],[4,5,6],[7,8,9]] , N=3 , M=3 , index=0
evenSumColumns(index,N,M,arr)
function evenSumColumns(index,N,M,arr){
    let j=0
    let sum=0
    if(index==M){
        return
    }
    
    function func(arr,j,N,index){
        if(j==N){
            return
        }
        if(arr[j][index]%2==0){
            sum+=arr[j][index]
        }
        j++
        func(arr,j,N,index)
    }
    func(arr,j,N,index)
    console.log(sum)
    index++
    evenSumColumns(index,N,M,arr)
}
