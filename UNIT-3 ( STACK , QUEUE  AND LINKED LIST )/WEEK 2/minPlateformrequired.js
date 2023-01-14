// Minimum Platforms Required Ended
// Description

// Given arrival and departure times of all trains that reach a railway station, 
// the task is to find the minimum number of platforms required for the railway station so that no train waits.


// Input
// Input Format:

// First-line contains a number of trains n

// Second-line contains array containing arrival time of n trains

// The third line contains an array containing departure time of n trains

// Constraints:

// n <= 100


// Output
// Output one number which is the minimum number of platforms required


// Sample Input 1 

// 6
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00


// Sample Output 1

// 3




function runProgram(input){
	input = input.trim().split("\n")
	let n = input[0]
	let arr1 = input[1].trim().split(" ").map(String)
	let arr2 = input[2].trim().split(" ").map(String)
    let arrival = []
    let dept = []
    for(let i=0; i<n; i++){
        arrival.push(+arr1[i].split(":").join(""))
        dept.push(+arr2[i].split(":").join(""))
    }
    
	myfun(n,arr1,arr2)
}
function myfun(n,arr1,arr2){
    let res=1
    for(let i=0; i<n; i++){
        let count=1
        for(let j=0; j<n; j++){
            if(arr1[i]>=arr1[j] && arr2[j]>=arr1[i] && i!=j){
                count++
            }
            res = Math.max(res,count)
        }
    }
    console.log(res)
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






