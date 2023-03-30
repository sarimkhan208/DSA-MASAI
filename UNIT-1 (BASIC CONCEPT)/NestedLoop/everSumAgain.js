// Even Sum Again @ Ended

// Description

// * You are given a number stored in a variable with the name n

// You have to print w lines such that on each line you find the sum
// of all even numbers in the range of [1,4] , where 4 represents al
// ithe numbers in the range of [2,]

// For example, consider the value stored inn = 3

// Then, first we find the sum of all even numbers, in the range of
// [1,1], which comes out to be zero, as there are no even numbers
// in the range

// Then, we find the sum of all even numbers, in the range of [1,2],
// which comes out to be 2, as there is only 1 even number (2). He
// nce, the sum becomes 2

// + Finally, we find the sum of all even numbers in the range of [1,3],
// which comes out to be 2, as there is only 1 even number (2). He
// nce, the sum becomes 2

// + Therefore, the final output becomes
// 0
// 2
// 2

// Sample Input
// 4

// Sample Output
// 0
// 2
// 2
// 6


let num=4
evenSumAgain(num) 
function evenSumAgain(num) {
    for(let i=1; i<=num; i++){
        let arr = []
        for(let j=1; j<=i; j++){
            arr.push(j)
        }
        let sum=0
        for(let k=0; k<arr.length; k++){
            if(arr[k]%2==0){
                sum+=arr[k]
            }
        }
        console.log(sum)
    }
}
