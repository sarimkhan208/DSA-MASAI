// Bob and Boxes @ Ended

// Description
// Bob the builder has a task of transferring a number of boxes, containing construction material, to a location for
// © arrive, so it is imperative that he gets the boxes delivered on time. His crane is designed in such a way, that he can only carry 1,3 or 5 boxes at a time. Wendy is worried for him, a
// nd to help him, wants to find the number of ways in which the boxes can be delievered. So, she asks you for a help. Help her find out the number of ways in which the boxes can be

// construction. The workers are waiting for the construction material t

// delievered.

// Input
// The first and the only line of input consists of a number N, denoting the number of boxes, that Bob has to transfer from one location to another.

// N<=40

// Output
// The output consists of only one line the number of ways in which the boxes can be transferred from Bobs home to the construction site.
// 


// Sample Input
// 7
// Sample Output 
// 12


console.log(myfun(7))
function myfun(n){
    if(n==0){
        return 1
    }
    if(n<0){
        return 0
    }
    return myfun(n-1)+myfun(n-3)+myfun(n-5)
}
