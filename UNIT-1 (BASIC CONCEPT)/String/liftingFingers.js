// Lifting Fingers @ Ended

// Description
// Given a string s, find the number of lifts performed by fingers while swit
// ching keys
// Here, we have a keyboard that has keys starting from ‘a’ to 'z' in a singl
// e row. Now, we have to type the given string using the above keyboar
// d

// In our problem, we lift our fingers whenever there is a change of chara
// cters while typing

// Consider, while typing the same character, no fingers are lifted


// Sample Input 1 
// abbbaaz

// Sample Output 1
// 4

liftFingers("abbbaaz")
function liftFingers(s) {
    let count=0
    for(let i=0; i<s.length; i++){
        if(s[i] != s[i+1]){
            count++
        }
    }
    console.log(count)
}
