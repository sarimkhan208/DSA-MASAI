// Team of Heroes Ended
// Description

// India and New Zealand are going to be playing in the final of the World Test Championship, 
// and Virat Kohli, the captain of the Indian Cricket Team, desperately wants to win the game

// Now Virat Kohli is very superstitious. He has a superstitious that if the sum of 
// the jerseys of the captain and the vice - captain of the team is exactly equal toK, 
// the team wins one hundred percent.

// Now, he has N jersey numbers given in the form of an array, and he has to find out 
// if there are two jersey numbers, whose sum is equal toKor not. 
// The jersey numbers have been kept in strictly increasing order. Help him, accomplish this task

// Sample Input 1 
// 5 31
// 10 11 13 17 21

// Sample Output 1

// YES


// Hint

// In the first test case, the sum of jersey number 21 and that of 10 is equal to K = 31,
//  therefore, the answer isYes

// In the second test case, no two jerseys have the sum equal toK = 44. Therefore, the answer isNo.


let arr = [10,11,13,17,21] ,n =5, k = 31;
console.log(myFunction(arr,n,k))
function myFunction(arr,n,k){
    let l=0,r=n-1;
    arr.sort(function(a,b){return a-b})
    while(l<r){
        if(arr[l]+arr[r] == k){
            return "Yes"
        }
        else if(arr[l]+arr[r]>k){
            r--
        }
        else{
            l++
        }
    }
    return "No"
}