// Digit Sum Sort Ended
// Description

// Given an array of N space-separated integers you have to sort the array in 
// non-decreasing order of their sum of digits and i
// f two numbers have same sum of digits then the smaller number comes first.



// Sample Input 1 

// 2
// 5
// 1 2 10 4 11
// 2
// 7 24
// Sample Output 1

// 1 10 2 11 4
// 24 7
// Hint

// For the first test case,

// sum of digits of numbers

// 1 = 1

// 2 = 2

// 10 = 1+0 = 1

// 4 = 4

// 11 = 1+1 = 2

// sorting numbers we get 1, 1, 2, 2, 4 therefore the required sorted array is 1, 10, 2, 11, 4.


let arr=  [1,2,10,4,11] , n = 5 ; 
myFun(arr,n)
function myFun(arr,n){
    let myArr = []
    for(let i=0; i<n; i++){
        let num = arr[i]
        num = num+""
        let sum = 0
        for(let j=0; j<num.length; j++){
            sum+=Number(num[j])
        }
        myArr.push(sum)
    }
    let a = myArr.length;
    for(let i=0; i<a-1; i++){
        for(let j=0; j<a-1-i; j++){
            if(myArr[j]>myArr[j+1]){
                let temp = myArr[j]
                myArr[j] = myArr[j+1]
                myArr[j+1] = temp
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            else if(myArr[j] == myArr[j+1]){
                if(arr[j] > arr[j+1]){
                    let temp2 = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp2
                    temp2 = myArr[j]
                    myArr[j] = myArr[j+1]
                    myArr[j+1] = temp2
                }
            }
        }
    }
    console.log(arr.join(" "))
}