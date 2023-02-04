// Masai Numbers Game Ended
// Description

// You are given an array A of N integers. Now, two functions F(X) and G(X) are defined:

// F(X) : This is the smallest number Z such that X < Z <= N and A[X] < A[Z]

// G(X) : This is the smallest number Z such that X < Z <= N and A[X] > A[Z]

// Now, you need to find for each index i of this array G(F(i))

// , where 1 <= i <= N. If such a number does not exist, for a particular index i, output -1 as 
// its answer. If such a number does exist, output  A[G(F[i])]


// Input
// Input Format

// The first line contains a single integer N denoting the size of array A. Each of the next N lines 
// contains a single integer, where the integer on the line denotes A[i]. Input Format

// Constraints

// Print N space separated integers on a single line, where the *i* th integer denotes A[G(F(i))] 
// or -1, if G(F(i)) does not exist.


// Output
// Output Format

// 1 <= N <= 30000

// 0 <= A[i] <= 10^18


// Sample Input 1 

// 8
// 3
// 7
// 1
// 7
// 8
// 4
// 5
// 2
// Sample Output 1

// 1 4 4 4 -1 2 -1 -1


let arr=[3,7,1,7,8,4,5,2],n=arr.length
myfun(arr,n)
function myfun(arr,n){
    let stk=[],index=[] , ans= []
    for(let i=n-1; i>=0; i--){
        while(stk.length!=0 && arr[i]>=stk[stk.length-1]){
            stk.pop()
            index.pop()
        }
        if(stk.length==0){
            ans.push(-1)
        }
        else{
            findSmaller(index[index.length-1] , stk[stk.length-1]);
        }
        stk.push(arr[i])
        index.push(i)
    }
    console.log(ans.reverse().join(" "))
    function findSmaller(a,num){
        let flag=false
        for(let i=a; i<n; i++){
            if(arr[i]<num){
                ans.push(arr[i])
                flag=true
                break;
            }
        }
        if(flag==false){
            ans.push(-1)
        }
    }
}
