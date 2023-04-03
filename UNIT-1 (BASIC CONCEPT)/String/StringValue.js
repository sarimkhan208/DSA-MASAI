// String value! @ Ended

// Description
// Given a string s of all lowercase letters and each letter has a value of it
// sown

// The value of the alphabet ais1,b is 2,c¢ is 3 tillz is 26

// Now you have to find the total value of the given string. The total value
// ofa string is the sum of values of all characters present in string

// Sample Input
// aba

// Sample Output
// 4

let S = 'aba'
stringValue(S)
function stringValue(S) {
    
    let alp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count=0;
    for(i=0;i<S.length;i++){
        for(j=0;j<27;j++){
            if(S[i]==alp[j]){
                count=count+j+1
            }
        }
    }
    console.log(count)
}
