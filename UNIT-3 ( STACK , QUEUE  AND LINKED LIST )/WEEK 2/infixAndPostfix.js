
// Infix to Postfix Ended
// Description

// You are given an infix expression, you need to convert it to a postfix expression.

// Infix expression is an expression that is in the form of (a operator b). eg. a + b, a * b.

// Postfix expression is an expression that is in the form of (a b operator). eg. a b +, a b *.

// Note : This question is optional
// Below is the algorithm to solve it, in case this excites you
// Algorithm - Infix to Postfix Conversion
// 1. Scan the entire expression left to right. 

// 2. If the character is an operand, add it to the final postfix expression, as 
// the relative ordering of the operands 
// is same in postfix and infix expression.

// 3. If the character is an opening bracket, put it in the stack.

// 4. If the character is a closing bracket, pop all the elements from the stack, 
// until an opening bracket is met. If the opening bracket is not met, and the stack becomes empty, 
// then the given infix expression is invalid. 
// Brackets in postfix expressions are superfluous, therefore, pop out the bracket, 
// without adding it into the postfix expression.

// 5. If the character is an operator, pop out all the operators, until the stack becomes empty, 
// or the character at the top of the stack has a lower priority than the current character. 

// 6. After the entire expression is scanned, pop off all the elements from the stack, 
// until the stack becomes empty, and add it to the final postfix expression. 

// 7. Finally, print the postfix expression. 

// Priority Order -> (^) > (*,/) > (+,-).
// Operators at the same level have same priority. 

// Brackets free the expression off the priorities, which the algorithm ensures is taken care of.



// Input
// Input Format

// First-line of input contains the infix expression

// Constraints

// Number of the operands<=26


// Output
// Print the postfix expression


// Sample Input 1 

// a+b-c+d*(e-f)/g+(h*(i/j))
// Sample Output 1

// ab+c-def-*g/+hij/*+

let s = "a+b-c+d*(e-f)/g+(h*(i/j))"
myfun(s)

function myfun(s){
    let stk = [],res="";
    for(let i=0; i<s.length; i++){
        if((s[i]>="a" && s[i]<="z") || (s[i]>="A" && s[i]<="Z") || (s[i]>="0" && s[i]<="9")){
            res+=s[i]
        }
        else if(s[i] == "("){
            stk.push(s[i])
        }
        else if(s[i] == ")"){
            while(stk.length!=0 && "(" != stk[stk.length-1]){
                res+=stk[stk.length-1]
                stk.pop()
            }
            stk.pop()
        }
        else{
            while(stk.length!=0 && check(s[i]) <= check(stk[stk.length-1])){
                res+=stk[stk.length-1]
                stk.pop()
            }
            stk.push(s[i])
        }
    }
    while(stk.length!=0){
        res+=stk[stk.length-1];
        stk.pop()
    }
    console.log(res)
    function check(a){
        if(a=="^"){
            return 3
        }
        else if(a=="*" || a== "/"){
            return 2
        }
        else if(a=="+" || a== "-"){
            return 1
        }
        else{
            return -1
        }
    }
}