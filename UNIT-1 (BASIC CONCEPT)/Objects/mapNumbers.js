// Map Numbers @ Ended

// Description

// * You are given a number stored in a variable with the name n

// + You are given another number stored in a variable with the name
// fi

// + You have to map all the numbers in the range of [2, J , includin
// g the values stored in n , such that the mapping begins from k

// + For example, consider the value stored in = 5, and K = 10, th
// en the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14


// Sample Input
// 5
// 10

// Sample Output
// 1-10
// 2-11
// 3-12
// 4-13
// 5-14


mapNumbers(5,10)
function mapNumbers(N,K){
    let obj = {}
    for(let i=1; i<=N; i++){
        obj[i] = K
        K++
    }
    for(let key in obj){
        console.log(key+"-"+obj[key])
    }
}
