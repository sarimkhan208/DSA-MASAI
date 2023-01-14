// Use Side Lane Ended
// Description

// There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.
// (by random, it means that any order of number: not sorted) 
// There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)



// If it is possible to achieve using the side land, print "yes"

// else print "no"


// Input
// Input Format :

// There are several test cases.

// The first line of each test case contains a single number n, the number of trucks.

// The second line contains the numbers 1 to n in an arbitrary order.

// All the numbers are separated by single spaces. These numbers indicate the order
// in which the trucks arrive in the approach street.

// Input ends with number 0

// Constraints :

// N < 1000


// Output
// For each test case your program has to output a line containing a single word "yes" 
// if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.


// Sample Input 1 

// 5
// 5 1 2 4 3 
// 0
// Sample Output 1

// yes



let arr  = [5,1,2,4,3] , n=arr.length
myfun(arr,n)
function myfun(arr,n){
    let stk = []
    let exp = 1
    let flag = true
    for(let i=0; i<n; i++){
        if(arr[i]==exp){
            exp++;
            continue
        }
        else if(stk[stk.length-1] == exp && stk.length!=0){
            while(stk[stk.length-1] == exp && stk.length!=0){
                stk.pop()
                exp++
            }
        } // USE SIDE LANE
        else if(stk[stk.length-1]<arr[i]){
            flag = false;
            break
        }
        stk.push(arr[i])
    }
    if(flag == true){
        console.log("yes")
    }else{
        console.log("no")
    }
}
