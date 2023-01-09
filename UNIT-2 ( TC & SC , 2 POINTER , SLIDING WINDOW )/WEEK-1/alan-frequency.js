// Sample Input 1 
// 4
// aman

// Sample Output 1

// a-2
// m-1
// n-1



let s = "aman"
let n=4;
function myfn(s,n){
    let alp="abcdefghijklmnopqrstuvwxyz";
    let str=""
    let obj = {};
    for(let i=0; i<27; i++){
        for(let j=0; j<n; j++){
            if(s[j]==alp[i]){
                if(obj[s[j]] == undefined){
                    obj[s[j]]=1;
                }
                else{
                    obj[s[j]]++
                }
            }
        }
    }
    for(let key in obj){
        console.log(key+"-"+obj[key])
    }
}
myfn(s,n)