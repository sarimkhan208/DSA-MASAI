// Make Leaderboard Ended
// Description

// You are given name and marks of N different students in a hackerrank contest. 
// Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. 
// Write your own sorting algorithm


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan






let nameArr = [ 'rancho', 'chatur', 'raju', 'farhan', 'virus', 'joy' ]
let marksArr = [ '45', '32', '30', '28', '32', '45' ] , n = 6
function runProgram(input){
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
    let arr = []
    for(let i=0; i<n; i++){
        arr.push(input[line++].trim().split(" "))
    }
    let nameArr = [];
    let marksArr = [];
    for(let i=0; i<arr.length; i++){
        nameArr.push(arr[i][0])
        marksArr.push(arr[i][1])
    }
    myfun(nameArr,marksArr,n);
}
function myfun(nameArr,marksArr,n){
    function sortName(nameArr,marksArr,n){
        console.log(nameArr,marksArr,n)
        for(let i=0; i<n-1; i++){
            for(let j=0; j<n-1-i; j++){
                if(check(nameArr[j],nameArr[j+1])){
                    swap(nameArr,marksArr,j,j+1)
                }
            }
        }
    }
    function sortMarks(nameArr,marksArr,n){
        for(let i=0; i<n-1; i++){
            for(let j=0; j<n-1-i; j++){
                if(marksArr[j]<marksArr[j+1]){
                    swap(nameArr,marksArr,j,j+1)
                }
            }
        }
    }
    function check(a,b){
        for(let i=0; i<Math.min(a.length,b.length); i++){
            if(a[i] != b[i]){
                if(a[i]>b[i]){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
    function swap(name,marks,i,j){
        let temp = name[i]
        name[i] = name[j]
        name[j] = temp
        temp = marks[i]
        marks[i] = marks[j]
        marks[j] = temp
    }
    sortName(nameArr,marksArr,n)
    sortMarks(nameArr,marksArr,n)
    function final(name,marks,n){
        let count=0,rank=1,prev=-1
        for(let i=0; i<n; i++){
            if(marks[i] == prev){
                console.log(rank+" "+name[i])
            }
            else{
                rank = rank+count
                console.log(rank+" "+name[i])
                count=0
            }
            count++;
            prev = marks[i]
        }
    }
    final(nameArr,marksArr,n)
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






