// Shuffle all Ended
// Description

// You are designing your own library and now you have to make your own shuffle function 
// that takes a list and returns the shuffled from, i.e. all nodes are shuffled.

// You think that the ideal approach is to take one node from the beginning and then one 
// from the end untill all nodes are covered.

// You do not have to output anything. Just complete the shuffleAll function such that the 
// shuffled list also has the same pointer as head.

// shuffleAll has the following parameters:

// -LinkedListNode pointer list:a reference to the head node in the list


// Input
// Input Format
// The first line of input contains an integer n, the number of elements in the linked list.

// The next line contains n integers, the node data values in order.

// Constraints
// 1 <= n <= 10^5

// 1 <= node values <= 10^4


// Output
// Output Format
// Output the shuffled list according to the approach given in the description


// Sample Input 1 

// 5
// 1 34 5 2 108
// Sample Output 1

// 1 108 34 2 5
// Hint

// First node followed by the last node then the first and last of the remaining list and then 
// only node is left.




const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
    let curr=head;
    let arr=[];
    while(curr!=null){
        arr.push(curr.data);
        curr=curr.next
    }
    let n=arr.length
    let mainArr=[]
    for(let i=0; i<=Math.floor(n/2); i++){
        if(i!=0){
            mainArr.push(arr[n-i]);
            mainArr.push(arr[i]);
        }
        else{
            mainArr.push(arr[i])
        }
    }
    curr=head;
    let i=0
    while(curr!=null){
        curr.data=mainArr[i]
        curr=curr.next;
        i++
    }
    return head
};


