// Nth node from the end -33:49:22
// Description

// Given a linked list consisting of nodesand given a number N. The task is to find the nth nodefrom 
// the end of the linked list.

// No need to take any input, just complete the function below and return the nth node.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number nodes (t)

// Next t lines contains the nodes of the linked list

// Next line contains the number n

// t <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 3
// 1
// Sample Output 1

// 3


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let slow=head
    let fast=head
    let i=1;
    while(i<n){
        fast = fast.next;
        i++
    }
    
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    return slow.data
    
}
