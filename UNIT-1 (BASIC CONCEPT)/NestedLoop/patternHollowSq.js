// Pattern Printing - Hollow Square

// Description

// You are given an integer
// Print the pattern as shown below.
// Ifthe value stored in n = 5 , then the pattern required will be
//  *******
//  *     *
//  *     *
//  *     *
//  *     *
//  *******   

//  Sample Input 
//  4

// Sample Output
// ****
// *  *
// *  *
// ****


patternPrinting(4)
function patternPrinting(N) {
    for(let i=1; i<=N; i++){
        let bag="";
        for(let j=1; j<=N; j++){
            if(i==1 || i==N){
                bag+="* ";
            }
            else if(j==1 || j==N){
                bag+="* ";
            }
            else{
                bag+="  ";
            }
        }
        console.log(bag);
    }
    
}


