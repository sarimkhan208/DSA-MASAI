// Sample Input 
// 4 2

// Sample Output
// 13.0000

let sum=1
myfun(4,2)
function myfun(x,n){
    if(n==0){
        console.log(Number.parseFloat(sum).toFixed(4))
        return
    }
    
    let mul=1
    function factorial(a){
        
        if(a==0){
            return mul
        }
        mul*=a
        a--
        factorial(a)
    }
    factorial(n)
    sum+=x**n/mul
    n--
    myfun(x,n)
}