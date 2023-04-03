// Array to String @ Ended

// Description

// You are given an array A of n elements. Write a programme that proce
// sses the elements of the array and generates a string from the elemen
// ts present in the array.

// For instance: If elements of the array are 3 5 0 9 8 => the output string
// should be "35098" (without quotes). But in case of elements are negati
// ve (lesser than 0), your string should contain 0 instead of that number.

// Suppose elements of the array are 2 -4 6 8 -9, the string generated sh
// ould be 20680 because -4 and -9 are negative elements, so your string
// contains 0 instead of that number.


// Sample Input

// 2 -4 6 8 -9

// Sample Output
// 20680

let arr = [2,-4,6,8,-9] , N=arr.length
arrayToStr(N,arr)
function arrayToStr(N,arr) {
    let bag = ""
    for(let i=0; i<N; i++){
        if(arr[i]<0){
            bag+=0
        }
        else{
            bag+=arr[i]
        }
    }
    console.log(bag)
}

