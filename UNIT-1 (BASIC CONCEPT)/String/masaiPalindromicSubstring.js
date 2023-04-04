// Masai Palindromic Substring @ Ended

// Description

// You are provided a string s

// Write a program that returns length of the longest palindromic substrin
// g of that string

// Sample Input
// thisracecarisgood

// Sample Output
// 7


masaiPalSubString("thisracecarisgood")
function masaiPalSubString(S){
    let max = 0;
    for(i=0;i<=S.length;i++){
        let bag=""
        for(j=i;j<S.length;j++){
            bag+=S[j]
            let bag2=""
            for(let k=bag.length-1; k>=0; k--){
                bag2+=bag[k]
            }
            if(bag==bag2){
                if(bag.length>max){
                    max=bag2.length
                }
            }
            
        }
    }
    console.log(max)
}