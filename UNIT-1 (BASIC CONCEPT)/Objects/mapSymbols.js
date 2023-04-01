// // Map Symbols @ Ended

// // Description

// // + You are given a number stored in a variable with the name n
// // + You have to map the following symbols starting from the value 1

// // + The mapping is such that the difference between the values of tw
// // o characters, is 2
// // ! @ # $ % ^ & *


// // !-10
// // @-12
// // #-14
// // $-16
// // %-18
// // ^-20
// // &-22
// // *-24



// Sample Input
// 10

// Sample Output

// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24


mapSymbols(10)
function mapSymbols(N) {
    let arr=["!","@","#","$","%","^","&","*"]
    let obj={}
    let arr1=[0,2,4,6,8,10,12,14]
    for(i=0;i<arr.length;i++){
        let key=arr[i]
        obj[key]=N+arr1[i]
    }
    for(let k in obj){
        console.log([k]+"-"+obj[k])
    }
}
