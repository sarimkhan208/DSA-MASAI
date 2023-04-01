// Map Characters & Sum @ Ended

// Description
// + You are given a number stored in a variable with the name n
// + You are also, given a string, whose length is stored in a variable

// with the name k , and the string is stored in a variable with the na
// me str

// + You have to map all lower case English characters, starting from
// the value stored in n

// + For example, if the value stored in u = 3¢ , then the mapping of t
// he characters will be as follows
// 

// Sample Input

// 30
// 3
// abc

// Sample Output
// 93

mapCharAndSum(30,3,'abc')
function mapCharAndSum(N,K,str) {
    let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let obj = {}
    for(let i=0; i<arr.length; i++){
        let key  = arr[i]
        obj[key] = N
        N++
    }
    let sum= 0
    for(let j=0; j<str.length; j++){
        for(let key in obj){
            if(str[j] == key){
                sum+=obj[key]
            }
        }
    }
    console.log(sum)
}
