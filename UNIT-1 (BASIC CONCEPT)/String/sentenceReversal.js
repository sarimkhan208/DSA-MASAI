// Sentence Reversal @ Ended

// Description
// You are given a string s
// You need to write a program that reverses the order/sequence in which
// words are present in the sentence keeping the case of each character

// preserved (upper case character should remain upper and lower case
// character is lower case)

// (Refer to the sample test case for better understanding)


// Sample Input 1 

// A Transformation in education 


// Sample Output 1
// education in Transformation A

masaiSentenceReverse("A Transformation in education ")
function masaiSentenceReverse(s) {
    let arr = s.split(" ")
    let bag = ""
    for(let i=arr.length-1; i>=0; i--){
        bag+=arr[i]+" "
    }
    console.log(bag)
}

