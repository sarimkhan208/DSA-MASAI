// Rotate the Linked List in ClockWise direction


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    let i=0
    while(i<2){
        let first=head;
        head=head.next;
        let curr=head
        while(curr.next!=null){
            curr=curr.next
        }
        curr.next=first
        first.next=null
        curr=head
        i++
    }
    return head
};

