// Identify Prime @ Ended

// Description

// * You are given a number stored in a variable with the name num
// * Check if the number is a prime number or not

// * Ifthe value stored in num , is a prime number print ves , else print
// No

// Note : A prime number is a number, that is divisible by only 1 and


// Sample Input 
// 13

// Sample Output
// Yes



identifyPrime(13)
function identifyPrime(num) {
    let count1=0
    let count2=0
    for(i=1;i<=num;i++){
        if(num%i==0){
            count1++
        }
        else{
            count2++
        }
    }
    if(count1==2){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
