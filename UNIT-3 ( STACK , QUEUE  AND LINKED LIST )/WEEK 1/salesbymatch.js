// Sales by match Ended
// Description

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


// Input
// Input Format
// The first line contains an integer n, the number of socks represented in ar.

// The second line contains n space-separated integers, arr[i], the colors of the socks in the pile.

// Constraints
// 1 <= n <= 100

// 1 <= ar[i] <= 100where0 <= i < n


// Output
// Output Format
// Print how many pairs of socks with matching colors there are.


// Sample Input 1 

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output 1

// 3


let arr = [10,20,20,10,10,30,50,10,20] , n=arr.length
myfun(arr,n)
function myfun(arr,n){
    let count=0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i!=j && arr[i] == arr[j] && arr[i]!="x"){
                count++;
                arr[i] =  "x"
                arr[j] = "x"
                break;
            }
        }
    }
    console.log(count)
}