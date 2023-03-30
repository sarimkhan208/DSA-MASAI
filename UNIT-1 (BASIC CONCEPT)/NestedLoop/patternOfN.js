// Pattern of N @ Ended

// Description
// + You are given a number stored in a variable with the name n

// + You have to print all the numbers in the range from 1 to N*N, SU
// ch that there are exactly n numbers on each line

// + For example, if the value stored in n = 3, then all the numbers in
// the range, from [1,9] need to be printed, such that there are 3 nu
// mbers on each line. Therefore, the required output is

// 1 2 3 
// 4 5 6
// 7 8 9


// Sample Input
// 4


// Sample Output
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12 
// 13 14 15 16

let N = 4
patternOfN(N)
function patternOfN(N) {
    let count=0
    for(let i=1; i<=N; i++){
        let bag = ""
        for(let j=1+count; j<=N+count; j++){
            bag+=j+" "
        }
        console.log(bag)
        count=count+N
    }
}
