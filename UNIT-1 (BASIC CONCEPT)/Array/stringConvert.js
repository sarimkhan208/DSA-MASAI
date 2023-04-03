// Strings - Convert @ Ended

// Description
// Given a string containing both Uppercase and Lowercase characters
// you need to change the Uppercase into Lowercase and Lowercase int

// © Uppercase

// Note: "A" will be changed to "a" and "b" will be changed to "B"

// Sample Input
// aBbcd

// Sample Output
// AbBC


let str = 'aBbcd' , N=str.length
convertStr(N,str)
function convertStr(N,str) {
    let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    let upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let bag=""
    for(let i=0; i<N; i++){
        for(let j=0; j<27; j++){
            if(str[i] == lowerCase[j]){
                bag+=upperCase[j]
            }
            else if(str[i] == upperCase[j]){
                bag+=lowerCase[j]
            }
        }
    }
    console.log(bag)
}
