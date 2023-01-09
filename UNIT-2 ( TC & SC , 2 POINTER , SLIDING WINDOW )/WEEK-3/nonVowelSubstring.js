// Non Vowel Substring 
// Description

// Given a stringstrof lengthN, find the length of the largest substring which contains only consonants.

// For example:str="abced", the sub-strings containing only consonants are:"bc"and"d", largest among them is"bc", so the output will be2, which is the length of largest sub-string containing only consonant.

// Another example:str="bfgedauty", here"bfg"is the largest substring without vowels or containing only consonants, so the output will be 3.

// Note:Input contains only the lowercase English alphabet.


// Sample Input 1 

// 5
// abced
// Sample Output 1

// 2
// Sample Input 2 

// 4
// aetu
// Sample Output 2

// 1
// Hint

// In Sample 1:

// str="abced"&N=5
// The sub-string which contains only consonants are:"bc"and"d"
// The longest is"bc", So the output will be2
// In Sample 2:

// str="aetu"&N=4
// The sub-string which contains only consonants is:"t"
// The longest is"t", So the output will be 2


let str = "abced" , N = 5;
nonVowelSubString(N, str)

function nonVowelSubString(N, str){
    let max = 0;
    let l = 0;
    for(let i=0; i<N; i++){
        if(str[i]!="a" && str[i]!="e" &&
        str[i]!="i" && str[i]!="o" && str[i]!="u"){
            l++
            if(l>max){
                max = l;
            }
        }
        else{
            l=0
        }
    }
    console.log(max)
}
