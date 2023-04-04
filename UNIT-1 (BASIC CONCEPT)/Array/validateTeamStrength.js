// // Validate Team Strength @ Ended

// // Description

// // There are two teams, given an integer n and an array of 2n length, first
// // n elements of an array represent the strength of the first team and the
// // second n elements represent the strength of the second team, you hav
// // e to take the absolute difference of the total strengths of both the array
// // and if this difference is less than given integer k then print Valid otherwi
// // se print Invalid


// Input

// Input Format
// The first line contains integer numbers n and integer k

// The second-line contains 2*n integer numbers a1, a2, .. a2n — eleme
// nts of the array.

// Constraints
// 1 <=n<=10°4
// 0 <=k<=10°4

// 1 <= a[i] <= 104


// Sample Input 1
// 3 0
// 1 2 3 4 2 1

// Sample Output 1
// Invalid


// Sample Input 1
// 3 4
// 1 8 5 9 6 1

// Sample Output 1
// Valid

let arr = [1,8,5,9,6,1] , n=3, k =4
validate(n,k,arr)
function validate(n,k,arr){
    let t1=0;
    let t2 = 0;
    for(let i=0; i<n; i++){
        t1+=arr[i]
    }
    for(let j=n; j<2*n; j++){
        t2+=arr[j]
    }
    if(Math.abs(t1-t2) < k){
        console.log("Valid")
    }else{
        console.log("Invalid")
    }
}
