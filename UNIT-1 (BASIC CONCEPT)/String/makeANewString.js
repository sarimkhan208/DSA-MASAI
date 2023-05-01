// Make a new string

// Description

// Given a string S consists of only small case letters. Each letter has a weight ie the weight of a is 0,b is 1c is 2 and so on. (a==0,b=>1,...2=>25)
// Your task is to make a new string whose indexes are square of the weights of the given string

// Hint: use modulo if the weight goes out of range.


// Sample Input
// abcd

// Sample Output
// abej

// Hint

// In the given string
// abed

// a has aweightof 0 and it's square is 0 so in new string the first character is a
// b has aweightof 1 and it's square is 1 so in new string the first character is b.
// c has aweightof 2 and it's square is 4 so in new string the first character is e.
// d has aweightof 4 and it's square is 16 so in new string the first character is j

// So, the characters in new string are a b e j as they respectively have 0 1 4 16 as theirweights.


let S = "abcd"
makeNewString(S)
function makeNewString(S){
    let str = "abcdefghijklmnopqrstuvwxyz";
    let obj = {}
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = i
        }
    }
    let arr=[]
    for(let j=0; j<S.length; j++){
        for(let key in obj){
            if(S[j] == key){
                arr.push(obj[key])
            }
        }
    }
    let bag2 = ""
    for(let k=0; k<arr.length; k++){
        let sqr = arr[k]*arr[k]
        if(sqr < 26){
            for(let key2 in obj){
                if(sqr == obj[key2]){
                    bag2+=key2
                }
            }
        }
        else{
            let rem = sqr%26
            // console.log(rem)
            for(let key3 in obj){
                if(rem == obj[key3]){
                    bag2+=key3
                }
            }
        }
        
    }
    console.log(bag2)
    
}