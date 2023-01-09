// Check Basket Ended
// Description

// Given a basketBofNfruits, 
// find out whether the basket contains multiple types of fruits or a single type of fruit.

// Sample Input 1 

// 3
// banana banana banana
// Sample Output 1

// Single Type
// Sample Input 2 

// 4
// apple orange banana orange
// Sample Output 2

// Mixed Basket
// Hint

// TestCase 1:Only 1 type of fruit is present.

// TestCase 2:3 types of fruits are present.

let B = ["apple","orange","banana","mango"] , N= 4;
checkBasket(N,B)
function checkBasket(N,B){
    let flag;
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(B[i] != B[j]){
                flag = true
            }
        }
    }
    if(flag ==  true){
        console.log("Mixed Basket")
    }
    else{
        console.log("Single Type")
    }
}
