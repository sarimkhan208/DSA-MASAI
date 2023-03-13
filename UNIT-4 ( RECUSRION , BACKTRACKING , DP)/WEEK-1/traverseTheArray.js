// Traverse the array (Recursively)
//                                                        Ended
// Description


// You are given an array, you have to traverse the array recursively
// You just need to complete the function
// Note : You need to implement a recursive function for it



// Input
// The first line of the input contains a value N referring to the size o
// f the array
// The next line contains N space separated integers denoting the V
// alues of the array

// Constraints
// 1 <=N <= 30
// 1 <= arr[i] <= 30

// Output
// Print the array elements using a recursive function
// Sample Input 1
//                                Sample Output 1
// 5                                    1
                                    // 2
                                    // 3
                                    // 4
                                    // 5
// 12345
//          


let arr = [1,2,3,4,5] , index=0

printArray(index,arr)
function printArray(index,arr){
    if (index == arr.length){
    	return;
    }
    console.log(arr[index++])
    printArray(index,arr)
}
