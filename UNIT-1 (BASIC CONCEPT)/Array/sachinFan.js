// Sachin Fan @ Ended

// Description

// Alex is a huge fan of Sachin Tendulkar. So, he naturally loves the number 10. He has an array of size N, and wants to find the count of all the subarrays in the array which contain at
// least one 10. Help him finish the task.

// Note: You have to take input yourself. You may copy-paste the boilerplate code.


// Sample Input
// 3
// 1 2 10

// Sample Output
// 3

let arr = [1,2,10] , size=arr.length
matrix(size,arr)
function matrix(size,arr){
    let count=0
    for(let i=0; i<size; i++){
        let bag = [];
        for(let j=i; j<size; j++){
            bag.push(arr[j])
            for(let k=0; k<bag.length; k++){
                if(bag[k] == 10){
                    count++
                    break;
                }
            }
        }
    }
    console.log(count)
}



