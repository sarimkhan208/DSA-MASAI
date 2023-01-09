// 2D Array and Sum 
// Description

// You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) 
// whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

// Sample Input 

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1

// Sample Output 1

// 4

// Hint

// Sample 1 Explanation

// here s is 6 presents 4 times( 2 Horizontal + 1 Vertical + 1 Diagona


let matrix = [[3,2,1],[2,2,2],[1,5,1]] , n = 3, m=3,s=6;
twoArrayAndSum(n,m,matrix,s)

function twoArrayAndSum(n, m, matrix, s){
    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<=m-3; j++){
            let sumH = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2];
            if(sumH == s){
                count++
            }
        }
    }
    
    for(let k=0; k<m; k++){
        for(let l=0; l<=n-3; l++){
            let sumV = matrix[l][k]+matrix[l+1][k]+matrix[l+2][k];
            if(sumV == s){
                count++;
            }
        }
    }
    for(let a=0; a<n+m; a++){
        var r = a;
        var c = 0;
        var str = "";
        while(r>=0 && c<m){
            if(r<n){
                str+=matrix[r][c]
            }
            r--;
            c++;
        }
        if(str.length>=3){
            for(let i=0; i<=str.length-3; i++){
                let sumD1 = Number(str[i])+Number(str[i+1])+Number(str[i+2]);
                if(sumD1 == s){
                    count++
                }
            }
        }
    }
    for(let b=0; b<n+m; b++){
        var r2 = b;
        var c2 = m-1;
        var str2 = "";
        while(r2>=0 && c2>=0){
            if(r2<n){
                str2+=matrix[r2][c2]
            }
            r2--;
            c2--;
        }
        if(str2.length >= 3){
            for(let j=0; j<=str2.length-3; j++){
                let sumD2 = Number(str2[j])+Number(str2[j+1])+Number(str2[j+2]);
                if(sumD2 == s){
                    count++;
                }
            }
        }
    }
    console.log(count)
    
}