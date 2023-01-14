// Masai Coding Competition Ended
// Description

// There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical 
// in this competition,Rohit asked Harshit to help him in the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a different roll number. 
// Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as 
// he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the 
// end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to 
// come and give his name and Harshit will remove him from the queue. There are Q operations of one of the 
// following types:

// E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned 
// above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and put his name 
// and Harshit will remove him from the queue


// Input
// Input Format :

// First line contains an integer Q denoting the number of operations.

// Next Q lines will contains one of the 2 types of operations.



// Constraints :

// Number of dequeue operations will never be greater than enqueue operations at any point of time.

// 1<=Q<=100000

// 1<=a<=4

// 1<=b<=50000


// Output
// For each 2nd (D) type of operation, print two space separated integers, the front student's club and 
// roll number.


// Sample Input 1 

// 5
// E 1 1
// E 2 1
// E 1 2
// D
// D
// Sample Output 1

// 1 1
// 1 2
// Hint

// Explanation :

// E 1 1( This meansE club_Number roll_Number)

// The 2 types of operations are :

// E club_Number roll_Numbe:Insert in the queue
// If the same club member already present in the queue, then insert the new entry  next to that
// Otherwise, Insert at the last
// D:Print and Remove the front of the queue


// Test Case Explanation :

// E 1 1     ===>  Insert in the Queue = [ (1,1) ]

// E 2 1    ===>   Since Club Member 2 is not present in the queue, Then in this case , insert this entry in last  Queue = [(1,1) , (2,1) ]

// E 1 2    ===>   Since Club Member 1 is already present, In this case insert the entry next to it Queue =[(1,1) , (1,2) ,(2,1) ]

// D         ====>  Remove Front of queue and print  (1,1)  Now, Queue = [(1,2) ,(2,1) ]

// D         ====>Remove Front of queue and print  (1,2)  Now, Queue = [(2,1) ]



// Thus Final Output is :

// (1,1)

// (1,2)

let club=[]
 let c1=[]
 let c2=[]
 let c3=[]
 let c4=[]
 

function test(q,c,r){
    if(q=="E"){
        if(club.includes(c)===false)club.push(c)
        
        
        switch(c){
            case 1:c1.push(r)
            break;
            
            case 2:c2.push(r) 
            break;
            
            case 3:c3.push(r)
            break;
            
            case 4:c4.push(r)
            
        }
        
    }else if(q=="D"){
        
        switch(club[0]){
             case 1:console.log(club[0]+" "+c1.shift())
             if(c1.length==0)club.shift()
            break;
            
            case 2:console.log(club[0]+" "+c2.shift())
             if(c2.length==0)club.shift()
            break;
            
            case 3:console.log(club[0]+" "+c3.shift())
             if(c3.length==0)club.shift()
            break;
            
            case 4:console.log(club[0]+" "+c4.shift())
             if(c4.length==0)club.shift()
            
        }
    }
    
}

function runProgram(input)
{
    input=input.trim().split('\n')
    n=+input[0]
    line=1
    let j=0
    for(let i=0;i<n;i++){
        let [q,c,r]=input[line].trim().split(' ').map(String)
        line++
        test(q,+c,+r)
    }
}
if (process.env.USERNAME === "") {
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