// Middle Node -33:48:28
// Description

// Given a non-empty, singly linked list with the head nodehead, 
// return a middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Complete the functionbelow, no need to take any input.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (t)

// Next t lines contains the node of the linked list

// t <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 3
// Sample Output 1

// 2

onst LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let count=1,curr=head;
    while(curr.next!=null){
        count++;
        curr=curr.next
    }
    curr=head;
    
    if(count%2==0){
        count=count/2 + 1;
    }
    else{
        count=Math.ceil(count/2)
    }
    let i=0,el;
    while(i!=count){
        i++;
        el=curr.data
        curr=curr.next
    }
    return el
};
