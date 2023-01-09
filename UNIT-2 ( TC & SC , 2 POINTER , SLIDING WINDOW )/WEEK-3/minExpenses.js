// Minimum Expense Ended
// Description

// You are given an array ofNintegers, such that it denotes the number of rupees spent byOscarforNdays

// You have to find the minimum amount of money he has spent onKconsecutive days

// Declare a variable with the nameOscar, and 
// find the, minimum amount of money that he has spent during a consecutive period ofKdays



// Sample Input 1 

// 2
// 5 3
// 9 9 -5 9 5 
// 5 4
// 2 7 6 2 -5 
// Sample Output 1

// 9 
// 10
// Hint

// For the first testcase the different amount of money spent on K consecutive days is : 13 13 9,
//  and minimum is 9, hence the output is 9

// For the first testcase the different amount of money spent on K consecutive days is : 17 10, 
// and minimum is 10, hence the output is 10


let arr = [9,9,-5,9,5] , n = 5 , k = 3;
myfun(arr,n,k)
function myfun(arr,n,k){
    let sum = 0;
    for(let i=0; i<k; i++){
        sum+=arr[i]
    }
    let currsum = sum
    for(let i=k; i<n; i++){
        currsum+=arr[i]-arr[i-k];
        sum = Math.min(sum,currsum)
    }
    console.log(sum)
}