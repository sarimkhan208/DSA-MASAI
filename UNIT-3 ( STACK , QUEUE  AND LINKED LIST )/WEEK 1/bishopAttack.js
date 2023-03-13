// Bishop Attack Ended
// Description

// Ankush gifted his favorite student Akshay a chessboard to practice his chess skills. 
// This chessboard is a grid a with n rows and m columns with each cell having a non-negative 
// integer written on it.

// Akshay's challenge is to place a bishop on the board such that the sum of all cells attacked by 
// the bishop is maximal. The bishop attacks in all directions diagonally, and there is no limit to the 
// distance which the bishop can attack.

// Note that the cell on which the bishop is placed is also considered attacked.

// Help him find the maximal sum he can get.


// Input
// Input Format

// The first line contains the number of testcases, T

// For each testcase:

// The first line contains the number of rows and columns , n and m

// The next n lines contains m integers each representing the value of chess[i][j]

// Constraints

// 1<=T<=10

// 1<=n,m<=200

// 1<=chess[i][j]<=1000


// Output
// For each test case output a single integer, the maximum sum over all possible placements of the bishop.


// Sample Input 1 

// 4
// 4 4
// 1 2 2 1
// 2 4 2 4
// 2 2 3 1
// 2 4 2 4
// 2 1
// 1
// 0
// 3 3
// 1 1 1
// 1 1 1
// 1 1 1
// 3 3
// 0 1 1
// 1 0 1
// 1 1 0
// Sample Output 1

// 20
// 1
// 5
// 3

let arr = [[1,2,2,1],[2,4,2,4],[2,2,3,1],[2,4,2,4]] , n=4 , m=4;

myfun(arr,n,m)
function myfun(arr,n,m){
    let max = -Infinity;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            let res = check(i,j,arr)
            if(res>max){
                max = res
            }
        }
    }
    console.log(max)
    function check(rowindex,colindex,arr){
        let sum=0,row=rowindex,col=colindex;
        for(let i=row,j=col; i>=0 && j>=0; i-- && j--){
            sum+=arr[i][j]
        }
        
        row = rowindex+1, col = colindex+1;
        for(let i=row,j=col; i<n && j<m; i++ && j++){
            sum+=arr[i][j]
        }
        
        row = rowindex-1, col=colindex+1;
        for(let i=row,j=col; i>=0 && j<m; i-- && j++){
            sum+=arr[i][j]
        }
        row=rowindex+1,col=colindex-1;
        for(let i=row,j=col; i<n && j>=0; i++ && j--){
            sum+=arr[i][j]
        }
        return sum
        
    }
}