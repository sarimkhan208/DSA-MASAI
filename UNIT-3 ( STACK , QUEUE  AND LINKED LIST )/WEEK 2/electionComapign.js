// Election campaign -26:59:46
// Description

// Elections are close and you are a party worker of a political party and you have been assigned a task.

// The task is it to put up a poster on the side of a highway. There are n poles and you have to choose any two poles to put up the poster. Say you choose two poles of height h1 and h2 then the poster will be put up of height which is minimum of the two.

// And the width would be the distance between them. You have to put up the poster of maximum area to make your boss happy.

// What is the maximum area of the poster you can fit using the given poles. The n consecutive poles are separated by a unit distance.


// Input
// Input Format
// The first line contains the number of testcases t.

// Next 2*t lines we have the description of the t testcases.

// For each testcase first line contains n the number of consecutive poles. Next line contains n integers, the height of the n consecutive poles respectively separated by a unit distance.

// Constraints
// 1<= t <= 1000

// 2 <= n <=1000

// 1 <= height <= 1000


// Output
// Output Format
// For each testcase output the maximum area of the poster on a new line.


// Sample Input 1 

// 2
// 4
// 1 2 3 4
// 5
// 5 5 5 5 5
// Sample Output 1

// 4
// 20
// Hint

// In the first testcase we have 4 poles and we have to choose any 2 so we have 6 options 
// in total. Among those 6 options it can be show that the maximum area is obtained by 
// selecting the poles with height 2 and 4.

// Hence the area would be widhtheight = 2min(2,4) = 4

// In the second testcase since all poles are of the same height then to obtain maximum 
// area we have to maximize the width.

let poles = [1,2,3,4],n=poles.length
myfun(poles,n)
function myfun(poles,n){
    let maxArea=0
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++) {
          let width = j - i;
          let height = Math.min(poles[i], poles[j]);
          maxArea = Math.max(maxArea, width * height);
        }
    }
  console.log(maxArea)
}