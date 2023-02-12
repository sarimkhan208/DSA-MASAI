// Find Discount Ended
// Description

// You have come to a shop to buy some items.

// The shopkeeper hands you a list of n numbers, these are the prices of the items you wish to buy.

// You are a smart buyer so you convince him to give you a discount, but he also has a condition.

// For the ith item [ 1 <= i <= n ], he is ready to give you a discount of maximum x rupees 
// on the ith item, where x is prices of the first element from i+1 to n, such that x is less 
// than or equal to price[i].

// You have to output n elements, the ith of which represents the final price you will pay for
// the ith item.

// Your task is to minimize the total cost.

// Look at I/O sample for better understanding of the question.


// Input
// Input Format
// The first line contains the number of testcases t.

// Next 2*t lines we have the description of the t testcases.

// For each testcase there is 2 lines of input.

// The first line of input contains n, the size of the list.

// The second line contains n space separated integers the ith of which [ 1 <= i <= n ] 
// represents the price of the ith item.

// Constraints
// 1 <= t <=1000

// 1 <= n <= 10^4

// 0 <= price[i] <= 10000


// Output
// Output Format
// For each testcase output one line containing n space separated integers the ith of which 
// [ 1 <= i <= n ] represents the final price you will pay for the ith item.


// Sample Input 1 

// 3
// 5
// 8 4 6 2 3
// 5
// 1 2 3 4 5
// 4
// 10 1 1 6
// Sample Output 1

// 4 2 4 2 3
// 1 2 3 4 5
// 9 0 1 6
// Hint

// In the first test case :

// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, 
// therefore, the final price you will pay is 8 - 4 = 4.

// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, 
// therefore, the final price you will pay is 4 - 2 = 2.

// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, 
// therefore, the final price you will pay is 6 - 2 = 4.

// For items 3 and 4 you will not receive any discount at all.


let arr = [8,4,6,2,3] , n=arr.length
myfun(arr,n)
function myfun(arr,n){
    let res=[]
    for(let i=0; i<n; i++){
        let flag=false
        for(let j=i+1; j<n; j++){
            if(arr[i]>=arr[j] && i!=j){
                res.push(arr[i]-arr[j])
                flag=true;
                break
            }
        }
        if(flag==false){
            res.push(arr[i])
        }
        
    }
    console.log(res.join(" "))
}