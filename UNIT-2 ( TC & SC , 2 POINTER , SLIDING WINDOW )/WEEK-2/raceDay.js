// Race Day
// Description

// 240_F_164718312_h4VaTyPTH0NJu17DH2UERtRty28mvOSS.jpg

// You are given four distinct integers a, b, c, d.

// Sachin and three other people are running a marathon.

// The value a is the distance that Sachin has run and b, c, d 
// correspond to the distances the other three participants ran.

// Output the number of participants in front of Sachin.

// Sample Input 1 

// 4
// 2 3 4 1
// 10000 0 1 2
// 500 600 400 300
// 0 9999 10000 9998
// Sample Output 1

// 2
// 0
// 1
// 3
// Hint

// First Testcase
// For the first test case, there are 
// 2 people in front of Sachin, specifically the participants who ran distances of 3 and 4.

// The other participant is not in front of Sachin because he ran a shorter distance than Sachin.

// Second Testcase
// For the second test case, no one is in front of Sachin, since he ran a distance of 10000 
// while all others ran a distance of 0, 1, and 2 respectively.

// Third Testcase
// For the third test case, only the second person is in front of Sachin, who ran a total distance of 600 
// while Sachin ran a distance of 500.
let arr = [2,3,4,1]
myFunction(arr)
function myFunction(arr){
    let s = arr[0]
    let count = 0
    arr.sort(function(a,b){return b-a});
    for(let i=0; i<arr.length; i++){
        if(s==arr[i]){
            break
        }
        else{
            count++;
        }
    }
    console.log(count)
}    