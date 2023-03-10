




// Next Greater Element II Ended
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 
// if it does not exits.

// Also, consider this array to be a circular array, i.e. the next element to the last element is the 
// first element.

// Refer to the sample I/O for better understanding.


// Input
// Input Format
// The first line contains the number of testcases t.

// Next 2*t lines we have the description of the t testcases.

// For each testcase there is 2 lines of input.

// The first line of input contains n, the size of the array.

// The second line contains n space separated integers the ith of which [ 1 <= i <= n ] 
// represents the array[i].

// Constraints
// 1 <= t <=1000

// 1 <= n <= 10^4

// 0 <= array[i] <= 10000


// Output
// Output Format
// For each testcase output one line containing n space separated integers the ith of which [ 1 <= i <= n ] 
// represents the next greater element of array[i], or -1 if it doesn't exist.


// Sample Input 1 

// 2
// 3
// 1 2 1
// 5
// 1 2 3 4 3
// Sample Output 1

// 2 -1 2
// 2 3 4 -1 4
// Hint

// In the first test case The first 1's next greater number is 2;

// The number 2 can't find next greater number.

// The second 1's next greater number needs to search circularly, which is also 2.




let arr = [1,2,3,4,3] , n=5
myfun(arr,n)
function myfun(arr,n){
    let stk=[],ans=[];
    let x = "";
    for(let i=n-1; i>=0; i--){
        while(stk.length!=0 && arr[i]>=stk[stk.length-1]){
            stk.pop()
        }
        if(stk.length==0){
            if(check(arr[i])){
                ans.push(x)
                x=""
            }
            else{
                ans.push(-1)
            }
        }
        else{
            ans.push(stk[stk.length-1])
        }
        stk.push(arr[i])
    }
    console.log(ans.reverse().join(" "))
    function check(num){
        for(let i=0; i<n; i++){
            if(num<arr[i]){
                x=arr[i]
                return true
            }
        }
        return false
    }
}