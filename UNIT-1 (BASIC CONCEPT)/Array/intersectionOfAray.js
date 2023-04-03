// Intersection of Array @ Ended

// Description

// You are given 2 arrays arri and arr2 of N integers.

// Your task is to write a program that finds the one integer which is com
// mon in both arrays ( area and arr2 ).

// Note: There is always one integer common in both arrays.


// Input

// Input Format
// First line of input contains w , size of arrays.

// Second line contains n space separated integers making the first array
// (art )

// Third line contains w space separated integers making the second arra
// y (arr2 )

// Constraints

// 1<=N <= 1000




// Sample Input

// 3
// 4 5 7
// 9 2 5

// Sample OutPut
// 5



let arr1 = [4,5,7] , arr2 = [9,2,5] , N=arr1.length
intersectionOfArray(N, arr1, arr2)
function intersectionOfArray(N, arr1, arr2){
    let count=0
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            if(arr1[i]==arr2[j]){
                console.log(arr1[i])
            }
        }
    }
}
