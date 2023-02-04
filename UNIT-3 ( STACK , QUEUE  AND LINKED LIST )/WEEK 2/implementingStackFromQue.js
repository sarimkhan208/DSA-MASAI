// Implement Stack using Queue -28:2:36
// Description

// Complete the function of push and pop and top for a stack, queue object names are Q1 and Q2.

// Expected Time complexity is O(N) for push and O(1) for pop and top.


// Input
// This is a function complete problem. You just have to complete the function. 
// The input format given below is just for your understanding.

// The first line of the input contains Q, the number of queries to be executed.

// Each query X is of type X = 0, X = 1 or X = 2.

// Query X = 0 indicates, an element Y to be pushed into the stack.

// Query X = 2 indicates, an element to be popped off the stack.

// Query X = 1 indicates, an element to be peeked from the stack.


// Output
// For each query of type X = 1, print the value at the front of the queue.


// Sample Input 1 

// 6
// 0 1
// 0 2
// 0 3
// 1 
// 2
// 1
// Sample Output 1

// 3
// 2



/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	while(!this.Q1.isEmpty()){
    	    this.Q2.push(this.Q1.front())
    	    this.Q1.pop()
    	}
    	this.Q1.push(value)
    	while(!this.Q2.isEmpty()){
    	    this.Q1.push(this.Q2.front())
    	    this.Q2.pop()
    	}
    }
    pop() {
    	//write your code here..
    	this.Q1.pop()
    }
    top() {
        //write your code here..
        return this.Q1.front()
    }
    isEmpty() {
    	//write your code here..
    	return this.Q1.isEmpty()
    }
}
