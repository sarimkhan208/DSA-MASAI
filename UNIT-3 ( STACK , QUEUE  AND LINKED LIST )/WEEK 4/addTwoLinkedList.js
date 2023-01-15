// Add two Linked Lists -2:51:42
// Description

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the head of the updated linked list (In reverse order)


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// First Line contains the number of elements in the first linked list (t1)

// Next t1 lines contains a single node of linked list in which the first element is the head

// The next line contains the number of elements in the second linked list (t2)

// Next t2 lines contains a single node of linked list in which the first element is the head

// t1,t2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 2
// 4
// 3
// 3
// 5
// 6
// 4
// Sample Output 1

// 7 0 8
// Hint



const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    let pt1=l1
    let pt2=l2
    let sum=0
    let ans=null;
    let current=ans
    let carry=0
    while(pt1!=null || pt2!=null){
        let sum=0
        if(pt1==null){
            sum=pt2.val+carry
            pt2=pt2.next
        }
        else if(pt2==null){
            sum=pt1.val+carry
            pt1=pt1.next
        }
        else{
            sum=pt1.val+pt2.val+carry
            pt1=pt1.next
            pt2=pt2.next
        }
        carry=Math.floor(sum/10)
        sum = sum%10
        if(ans==null){
            ans = new ListNode(sum)
            current=ans
        }
        else{
            current.next = new ListNode(sum)
            current=current.next
        }
    }
    if(carry!=0){
        current.next=new ListNode(sum)
    }
    return ans
};

