// Nick and Hacks Ended
// Description

// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,
// while the second can multiply it by 20.
//  These hacks can be used any number of times.Can Nick help Tom with his hacks?


//  Sample Input 1 

// 5
// 1
// 2
// 10
// 25
// 200
// Sample Output 1

// Yes
// No
// Yes
// No
// Yes
// Hint

// Output Explanation :

// In the last case Nick can get Rs. 200 by first using 10x hack and then using 20x hack once.

// 1 -> 10 -> 200


let arr = [1,2,10,25,200] , n = 5;
myfun(arr,n)
function myfun(arr,n){
    for(let i=0; i<n; i++){
        let N = arr[i];
        let count2=0,count10=0
        while(N%10==0){
            N=N/10;
            count10++;
        }
        while(N%2==0){
            N=N/2;
            count2++;
        }
        if(N==1 && count2<=count10){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}