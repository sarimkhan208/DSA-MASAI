// Vowel Half @ Ended

// Description

// + You are given a string, stored in a variable with the name str. T
// he size of the string is stored in a variable

// + The string contains only small case English alphabets

// + You have to print true , if more than half the characters in the stri
// ngs are vowels, else print False

 

// + For example, consider the value stored in = 6, and str = “aa
// befe” . The number of vowels in the string are 4, which is more t
// han half of the length of the string, which is n/2 = 3 . Therefore, t
// he required output is True

// Note : The value stored in N, will always be even

// Input

// * The first line of the input contains the value stored in n

// * The next line contains the value stored in str

// Output

// + Print True if more than half of the characters in the string are vow
// els, else print False

// Sample Input 1 
// 6 
// aabefe

// Sample Output 1
// True


let str = "aabefe" , N=str.length
vowelHalf(N, str)
function vowelHalf(N, str) {
    let count=0;
    for(let i=0; i<N; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++   
        }
    }
    if(count > (N/2)){
        console.log("True")
    }else if (count <= (N/2)){
        console.log("False")
    }
}
