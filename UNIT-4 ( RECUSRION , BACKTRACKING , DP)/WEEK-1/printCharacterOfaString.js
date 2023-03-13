// Print Characters of a String @ Ended

// Description

// + You are given a string, whose size is stored in a variable with the
// name w

// + The string itself is stored in a variable with the name, str
// + Print all the characters, stored in str , on a new line

// + For example, if the value stored in i = 6 , and the string is str -
// “nrupul” , then the required output will be

// Input

// + The first line of the input contains the value stored in n
// + The next line contains the string stored in str

// Output

// + Print all characters of the string stored in str , on anew line, as s
// hown in the problem statement
// Sample Input 1 & Sample Output 1

//  6
//  ankush                 a
//                         n
//                         k
//                         u
//                         s
//                         h

// Hint

// + In the sample test case, the value stored inn - 6 , and the value s
// tored in str = “ankush”

// + Therefore, the required output will be


let str = 'ankush' , N=0;
printChar(N,str)
function printChar(N,str) {
    
    if(N==str.length){
        return
    }
    console.log(str[N++])
    printChar(N,str)
    

}
