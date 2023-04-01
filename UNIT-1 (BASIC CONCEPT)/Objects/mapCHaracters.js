// Map Characters @ Ended

// Description

// * You are given a number stored in a variable with the name n

// + You have to print the first N English smaller case alphabets, map
// ped with the values starting from 4 to ni, including the value store
// dinw

// + For example, consider the value stored in n = 3 , then the requir
// ed output will be

// Note : The value stored in N will always be less than or equal to 2
// a-1
// b-2
// c-3


// Sample Input
// 5

// Sample output

// a-1 
// b-2
// c-3
// d-4
// e-5


mapChar(5)
function mapChar(N) {
    
    let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let obj={}
    for(let i = 0; i<N; i++){
        obj[arr[i]] = i+1
    }
    for(let key in obj){
        console.log(key+"-"+obj[key])
    }
}
