// Number of ways problems @ Ended

// Description

// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps ata time. You have to count, how many possible ways Sandhya can run up to th
// e stairs

// Input
// input Format
// Input contains integer N that is number of steps
// Constraints

// N <= 30

// Sample Input 
// 4

// Sample output 
// 7


// Hint
// No of the ways for n=4 are:-
// 1 1 1 4
// 1 1 2
// 2 1 1
// 1 2 1
// 1 3
// 3 1 
// 2 2

console.log(count(4))
function count(n){
    if(n==0){
        return 1
    }
    if(n<0){
        return 0
    }
    else{
        return count(n-1)+count(n-2)+count(n-3)
    }
}
