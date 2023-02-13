// Add 1 to Linked List -1:31:31
// Description

// A number is given represented in the form of a linked list. Add one to it.


// Input
// This is a function complete problem. You don't have to take the input just complete the function given.

// The sample test case is given only for your understanding.


// Output
// Return head of linked list which is the new number after incrementing one.


// Sample Input 1 

// 4
// 2 3 1 3
// Sample Output 1

// 2314




const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function reverse(head){
    let past=null
    let present=head
    let  future=null
    
    while(present){
        future=present.next
        present.next=past
        past=present
        present=future
    }
    
    return past
    
}

var addOneToLinkedList = function(head) {
    
    if(!head){
        let node=new LinkedListNode(head)
        head=node
        return head
    }
    
    let new_head=reverse(head)
    
    let current=new_head
     let carry=1
     
     let temp;
    while(current){
        temp=current.data+carry
         current.data=(temp)%10                                                                     
        carry=Math.floor(temp/10)
        temp2=current
          current=current.next
    }
    
     if(carry!==0){
            let new_node=new LinkedListNode(carry)
    
                 temp2.next=new_node
                
        }
    
 
     

    return reverse(new_head)
    
};