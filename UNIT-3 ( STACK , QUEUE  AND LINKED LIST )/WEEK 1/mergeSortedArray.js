// Merging sorted arrays -5:20:36
// Description

// Given two arrays of size n and m (unsorted), sort them and then merge them. 
// NOTE ; you can easily take all the input in one array and then sort them

// which is of (n+m)*log(n+m) complexity but try to do it in (n*logn + m*logm + n + m) 
// complexity, i.e. merge them in linear time.


// Input
// 1<=T<=10

// 1<= N,M <= 100000

// 1 <= Ai <= 1000000000 (array1 of n elements)

// 1 <= Aj <= 1000000000 (array2 of m elements)


// Output
// output N the total size of the output array and the array in the next line.


// Sample Input 1 

// 1
// 2 3
// 1 2
// 3 2 1
// Sample Output 1

// 5
// 1 1 2 2 3

let arr1 = [1,2],n=arr1.length
let arr2 = [3,2,1],m=arr2.length
myfun(n,m,arr1,arr2)
function myfun(n,m,arr1,arr2){
    arr1.sort(function(a,b){return a-b});
    arr2.sort(function(a,b){return a-b});
    
    let obj={};
    for(let i=0; i<n; i++){
        if(obj[arr1[i]] == undefined){
            obj[arr1[i]]=1
        }
        else{
            obj[arr1[i]]++
        }
    }
    for(let i=0; i<m; i++){
        if(obj[arr2[i]] == undefined){
            obj[arr2[i]]=1
        }
        else{
            obj[arr2[i]]++
        }
    }
    
    let ans = []
    for(let key in obj){
        let j=0
        while(j<obj[key]){
            ans.push(key)
            j++
        }
        
    }
    console.log(n+m)
    console.log(ans.join(" "))
    
}