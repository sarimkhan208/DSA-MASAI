// Merge two Linked Lists -5:18:15
// Description

// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Complete the function below and return the head of the new linked list.


// Input
// This is a function complete problem

// To get a understanding of the input-

// The first line contains the number of nodes in the first linked list (n1)

// Next n1 lines contains the nodes of the first linked list

// Next line contains the number of nodes in the second linked list (n2)

// Next n2 lines contains the nodes of the second linked list

// n1, n2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 1
// 2
// 4
// 2
// 3
// 4
// 5
// Sample Output 1

// 1 1 2 2 3 4 5



const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let a = l1
    let b = l2
    let arr=[]
    while(a){
        arr.push(a.val)
        a=a.next
    }
    while(b){
        arr.push(b.val)
        b=b.next
    }
    arr.sort(function(a,b){return a-b});
    
    let head = new ListNode(arr[0]);
    let curr=head
    let i=1
    while(i<arr.length){
        let node = new ListNode(arr[i]);
        curr.next=node
        curr=curr.next
        i++
    }
    return head
};

