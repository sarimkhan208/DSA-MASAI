//  Masai School had hosted a Football tournament. 
// You got hold of a profound description of the final match's process.
//  On the whole, there are n lines in that description each of which described one goal.
//   Every goal was marked with the name of the team that had scored it. Write a program to 
//   find the name of the team that won the finals. It is guaranteed that the match did not end in a tie.

// Sample Input 1 

// 5
// A
// ABA
// ABA
// A
// A

// Sample Output 1

// A


function footBallTournament(n, arr) {
  //write code here
  let obj = {};
  for(let i=0; i<n; i++){
      let key = arr[i];
      if(obj[key] == undefined){
          obj[key] = 1;
      }else{
          obj[key]++;
      }
  }
  let max = -1;
  let op = "";
  for(let key in obj){
      if(obj[key]>max){
          max=obj[key];
          op = key
      }
  }
  console.log(op)
}