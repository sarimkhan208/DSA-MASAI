// Birthday gift @ Ended

// Description
// Happy Birthday!

// Today is your birthday. You have 2 bestfriends and both of them are planning to gift you a string for your birthday.

// Now, you get angry if people give you similar birthday gifts. You consider two strings similar if the character at all indexes are same irrespective of their case (i.e lowercase or upper
// case are considered similar)

// Compare the two string and tell if you will get angry or not.
// Note: It is guaranteed that the size of the strings are same
// Input
// Input Format
// The input contains multiple testcases. The first line contains an integer t - the number of testcases.

// The following 2*t lines contain the description to the testcases.


// Sample Input
// aaaa
// aaaA
// tradffA
// TradffD

// Sample Output
// Angry
// Not Angry


let str1 = 'aaaa' , str2 = 'aaaA' , n=str1.length-1 
console.log(myfun(str1,str2,n))
function myfun(str1,str2,n){
    let flag=false
    for(let i=0; i<n; i++){
        if( str1[i].toUpperCase()==str2[i].toLowerCase() || 
            str1[i].toLowerCase()==str2[i].toUpperCase() || 
            str1[i].toUpperCase()==str2[i].toUpperCase() || 
            str1[i].toLowerCase()==str2[i].toLowerCase()  ){
            flag=true
        }
        else{
            flag=false
            break
        }
    }
    if(flag==true){
        return "Angry"
    }else{
        return "Not angry"
    }
}
