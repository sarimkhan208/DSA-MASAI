// Map Characters Again @ Ended

// Description
// + You are given a number stored in variable with the name n
// + You have to map all the lowercase English characters, to a numb

// er starting from the value stored in n , and incrementing it by 1 at
// every step

// + For example, consider the value stored in N=30 , then the requi
// red output will be

// a-30
// b-29
// c-28
// d-27
// e-26


// Sample Input
// 5

// Sample Output

// a-30
// b-29
// c-28
// d-27
// e-26


mapCharAgain(5)
function mapCharAgain(N) {
    let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let obj={}
    for(let i=0; i<arr.length; i++){
        let key = arr[i]
        obj[key] = N
        N++
    }
    for(let key in obj){
        console.log(key+"-"+obj[key])
    }
}