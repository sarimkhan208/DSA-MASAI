// Vowel & Consonant Count @ Ended

// Description

// + You are given a string, stored in a variable with the name, str

// * The size of the string is stored in another variable with the name
// N

// + You have to find the count of vowels, and consonants in the strin
// g, and print it

// For example, consider the value stored in str = “nrupul” , andt
// he value stored inn = 6 , then the vowels, in the string is u , whi
// chis present twice. Therefore, the count of vowels becomes 2, a
// nd the rest of the characters are consonants, so the count of con
// sonants becomes 4. Therefore, the required output will be
// 

// Note : All characters in the string are lowercase English alphabets

// Note : The vowels in the English alphabet are the following - a,e,i

// Input

// + The first line of the input contains the value stored in n

// + The next line contains the value stored in str

// Output

// + Print the number of vowels, and number of consonants, present i
// n the string stored in str

// Sample Input 1 

// 6 
// ankush
// Sample Output 1
// 2 4

let str = 'studiogangster' , N=str.length
vowelAndConsonantCount(N, str)
function vowelAndConsonantCount(N, str) {
    let vowelCount = 0;
    let constCount = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        {
            vowelCount++;
        }
        else
        {
            constCount++;
        }
    }
    console.log(vowelCount,constCount);
  
}
