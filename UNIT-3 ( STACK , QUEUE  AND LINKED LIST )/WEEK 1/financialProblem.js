// Solve a financial problem Ended
// Description

// Given a list of prices of a single stock for N number of days, find stock span for each day. 
// Stock span is defined as a number of consecutive days prior to the current day
// when the price of a stock was less than or equal to the price at current day.
// oj1.png

// For the first day, span is always 1. In the example we can see that for day 2 at 60, 
// there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, 
// the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. 
// Remember days should be consecutive, 
// that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.


// Input
// Input Format

// First line contains an integer T specifying the number of test cases.

// First line of each test case contains the value of N

// Second line of each test case contains N space separated integers which are the stock price for N days

// Constraints

// N <= 1000000


// Output
// Output Format

// Print the stock span for each days


// Sample Input 1 

// 1
// 6
// 100 60 70 65 80 85
// Sample Output 1

// 1 1 2 1 4 5
// Hint

// Sample 1 Explanation

// For the first day, span is always 1. In the example we can see that for day 2 at 60, 
// there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, 
// the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. 
// Remember days should be consecutive, 
// that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.


let arr = [100,60,70,65,80,85] , n=arr.length
myfun(arr,n);
function myfun(arr,n){
    let stk = [];
    let ans = [];
    let index = [];
    for(let i=0; i<n; i++){
        while(stk.length!==0 && arr[i]>=stk[stk.length-1]){
            stk.pop()
            index.pop()
        }
        if(stk.length==0){
            ans.push(-1)
        }
        else{
            
            ans.push(i-index[index.length-1])
        }
        index.push(i)
        stk.push(arr[i])
    }
   
    console.log(ans.join(" "))
}