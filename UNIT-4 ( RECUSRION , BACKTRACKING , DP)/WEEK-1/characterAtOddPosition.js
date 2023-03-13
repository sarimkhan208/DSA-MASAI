// Characters At Odd Position @ Ended

// Description

// + You are given a string whose size is stored in a variable with the
// name w , stored in a variable with the name str

// + You have to print all the characters in the string, which are prese
// nt at odd indexes

// + For example, consider the string stored in str = “nrupul” , and t
// he value stored in n = 6 , then the output will be

// + The characters stored at odd positions are r - index 1, p - ind

// ex 3, 1 - index 5, hence they are printed, each character on a new line

// Note : The indexing in the string starts from @

// Input

// * The first line of the input contains the value stored in n
// * The next line of the input contains the value stored in str

// Output

// Print the characters at odd indexes, as shown in the problem statemen
// t, each character on a new line


// Sample Input 
// 6
// ankush

// Sample Output

// n
// u
// h



let str = "ankush" , N = 0
charAtOddPos(N,str)
function charAtOddPos(N,str) {
    if (N == str.length){
    	return;
    }
    if(N%2==1){
        console.log(str[N])
    }
    N++
    charAtOddPos(N,str)
    
}
