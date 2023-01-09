// One Station To Another Ended
// Description

// You are given a listAof metro stations unique ID's
// (in the same order), and given a Source and Destination station ID. 
// find out what will be the price of the ticket. The price of the ticket is 
// calculated by multiplying 7 with the distance between the stations. 
// Distance between two adjacent stations is 5 KMs.


// Sample Input 1 

// 3
// 4
// 47 63 41 40 
// 41 40
// 4
// 19 32 7 3 
// 19 7
// 3
// 67 2 18 
// 2 18
// Sample Output 1

// 35
// 70
// 35
// Hint

// TestCase 1:-Distance between station40and41is 5 KM,Ticket Price - 5*7 = 35

// TestCase 2:-Distance between station19and7is 10 KM.Ticket Price - 10*7 = 70

// TestCase 3:-Distance between station2and18is 5 KM.Ticket Price -5*7 = 35


let A = [47,63,41,40] , N=4 , S=41 , D=40;
station1to2(N, A, S, D)
function station1to2(N, A, S, D){
    let a=0
    let b=0
    for(let i=0; i<N; i++){
        if(A[i]==D){
            a=i
        }
        else if(A[i]==S){
            b=i
        }
    }
    console.log(7*5*(a-b))
}
