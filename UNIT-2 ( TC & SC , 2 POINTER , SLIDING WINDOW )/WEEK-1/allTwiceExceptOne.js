// All Twice Except One 
// Description

// Given an array A of n elements, every element appears twice in the array except for one element. 
// Find the element that is uniquely present in the array.

// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. 
// Find that particular element.

// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. 
// Find that particular element.

// Sample Input 1 

// 5
// 1 2 1 3 2

// Sample Output 1

// 3


let arr = [1,2,1,3,2] , n = 5;

myFunction(arr,n);

function myFunction(arr,n){
    let obj = {};
    for(let i=0; i<n; i++){
        let key = arr[i];
        if(obj[key] == undefined){
            obj[key] = 1;
        }else{
            obj[key]++;
        }
    }
    for(let key in obj){
        if(obj[key] == 1){
            console.log(key);
            break;
        }
    }
}