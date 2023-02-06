// Marathon Ended
// Description

// You take part in a marathon, and there are many different points from where you can start 
// running (named from 0); at each point, there is a counter for energy drinks. 
// Not all energy drinks are the same; every one of them gives you a different amount of energy. 
// With one unit of energy, you can only run 1 km, and the starting points are located randomly, 
// so the distance between them is not fixed. Assume that at the start of the marathon, 
// you're exhausted. So you want to find the point from which you should start running so 
// that you complete the whole marathon.


// Input
// The first line has the number of starting points (t)

// The next t lines contain 2 integers spaced evenly-

// The first one will be the amount of energy you get after taking energy drinks at that point.

// The second one will be the distance to the next point (in km)

// 1<= t <= 10000


// Output
// You have to print a single integer which represents the point at which the runner should start.

// Note-Print 'No starting points' (without quotes) if there no end from which you can start so
//  that you complete the marathon.


// Sample Input 1 

// 3
// 1 5
// 10 3
// 3 4
// Sample Output 1

// 1
// Hint

// When you start at 0th point, which has '1' amount of energy drink and since it can make you run 
// only 1 km, it won't be sufficient to go to the 1st point as it is '5' km far.

// When you start at 1st point Energy- '10', distance to cover-'3', this means it works. 
// Now since you have to complete the whole marathon, you should have enough energy to come
//  back to your starting point. When you reach the 2nd point, you have '7' units of energy 
//  remaining already, and now since you get an additional '3' units and since the distance 
//  is just '4' km, you can proceed further.
// You have to check like this.



function runProgram(input){
	input = input.trim().split("\n");
	let n = input[0];
	let arr = []
	let line=1;
	for(let i=0; i<n; i++){
	    arr.push(input[line++].trim().split(" ").map(Number))
	    
	}
	myfun(n,arr)
}
function myfun(n,arr){
   let res=null;
   for(let i=0; i<n; i++){
       let sum=0;
       let f=false;
       if(arr[i][0] > arr[i][1]){
           for(let j=i; j<n; j++){
               sum+=arr[j][0];
               if(sum>arr[j][1]){
                   sum-=arr[j][1]
               }
               else{
                   f=true;
                   break
               }
           }
           if(!f){
               if(sum>arr[i][1]){
                   res=i
                   break
               }
           }
       }
       
   }
   if(res){
       console.log(res)
   }else{
       console.log("No starting points")
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
