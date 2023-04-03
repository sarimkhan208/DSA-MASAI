// Pattern of Indexes

// Description

// You need to print pattern as given in Sample Input.

// Analyse the sample test case to understand the pattern

// it

// @ Ended

// Sample Input 1
// 1

// Sample OutPut 2
// 0


// Sample Input 2
// 5

// Sample OutPut 2

// 0 1 0 3 0
// 1 1 1 3 1
// 2 1 2 3 2
// 3 1 3 3 3 
// 4 1 4 3 4

patternIndex(5)
function patternIndex(N){
    for(let i=0; i<N; i++){
        let bag=""
        for(let j=0; j<N; j++){
            if(j%2==0){
                bag+=i+" "
            }
            else if(j%2==1){
                bag+=j+" "
            }
        }
        console.log(bag)
    }
}