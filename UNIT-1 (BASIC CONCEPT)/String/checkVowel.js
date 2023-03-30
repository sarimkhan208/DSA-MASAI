// Check Vowel @ Ended

// Description
// + You are given a string, whose size is stored in a variable with the
// name N

// + The string is stored in a variable with the name str

// + You have to print true , if the string contains at least one vowel
// otherwise print false

// + For example, consider the value stored in v = 6 , and the value s
// tored in str - “nrupul” , then the output will be true , since the
// string contains the vowel u twice

 

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the follon
// 
// Input

// * The first line of the input contains the value stored in n

// + The next line contains the value stored in str

// Output

// Print true , if the value stored in str contains at least one vowel, other
// wise print false

// Sample Input 1 £4 Sample Output 1

// 4 false
// stvr
// 

let str = "abcde" , N = str.length
checkVowel(N, str)
function checkVowel(N, str) {
    let flag =false
    for(let i=0; i<str.length; i++)
    {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        {
            flag = true
        }
    }
    console.log(flag);
}
