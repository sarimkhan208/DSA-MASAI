// Missing Vowels @ Ended

// Description

// + You are given a string, stored in a variable str , and the length of
// the string is stored in the variable n

// + You have to find all the vowels that are not present in the string a
// nd print them,
// + Ifa string contains all the vowels, in that case, print -1

// + For example, consider the value stored inn = 6, and str = nat
// ure


// out of the 5 vowels(a,e,i,o,u)
// the word “nature” contains a,u,e

// The vowel that are not present in the string are : i,o

// hence the output is io

// Note : The string contains only lower case English Alphabets


// Input

// * The first line of the input contains the value stored in n

// * The second line of the input contains the value stored in str


// Sample input 
// 6
// nature

// Sample output
// io


let str = "nature"  , N=str.length
missingVowel(N, str) 
function missingVowel(N, str) {
    let bag=""
    let obj={
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }
    for(i=0; i<N; i++){
        delete obj[str[i]]
    }
    for(let key in obj){
        bag+=key;
    }
    if(bag.length==0){
        console.log(-1)
    }else{
        console.log(bag)
    }
}
