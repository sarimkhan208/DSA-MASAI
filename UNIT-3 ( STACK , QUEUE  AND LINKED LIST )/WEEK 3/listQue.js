// List and Queue Ended
// Description

// You need to implement a queue data structure with a list using plain list methods. 
// You can only use list.append() and list.pop() methods in this question.

// Note-You can't uselist.pop(index) too in this question.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the queue.

// Eg- E 3 means add 3 in the queue

// D means to remove the front element of the queue and print it on the screen

// Note-If the queue is empty print- 'Empty' (Without the quotes)


// Output
// Print the front element as a single integer on the screen.


// Sample Input 1 

// 4
// E 2
// E 3
// D
// D
// Sample Output 1

// 2
// 3

function runProgram(input){
    input = input.trim().split("\n");
    let tc = input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let [q1,q2] = input[line++].trim().split(" ").map(String);
        myfun(q1,q2);
    }
}
let que = [];
function myfun(q1,q2){
    if(q1 == "E"){
        que.push(q2)
    }
    else{
        if(que.length==0){
            console.log("Empty")
        }
        else{
            console.log(que.shift())
        }
    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


