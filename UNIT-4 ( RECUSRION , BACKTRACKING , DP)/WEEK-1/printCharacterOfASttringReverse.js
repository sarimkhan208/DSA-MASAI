// Print Characters of a String in Reverse @ Ended

// Description
// + You are given a string, whose size is stored in a variable with the
// name N

// * You have to print all the characters in the string in reverse order,
// on a new line

// + For example, consider the string stored in str = “nrupul” , and t
// he value stored in = 6 , then the required output will be

// l
// u
// p
// u
// r
// n

// Input

// The first line of the input contains the value stored in n

// + The next line contains the value stored in str

// Output

// Print all the characters stored in str , in reverse order, one character p
// er line

// Sample Input 1 &

// 6
// ankush


// Sample Output 1
// h
// s
// u
// k
// n
// a

let str = 'ankush'
let N = str.length-1
printCharReverse(N,str)
function printCharReverse(N,str) {
    if (N<0){
    	return;
    }
    console.log(str[N]);
    printCharReverse(N-1,str);

}
