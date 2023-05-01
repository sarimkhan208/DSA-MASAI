// Kazama & Shinchan @ Ended
// Description

// Shinchan & Kazama are classmates at Futaba Kindergarten. |- chan likes shinchan, more than Kazama. Kazama wants to prove to I-chan that he is smarter than Shinchan, so he tr
// ies to boast his knowledge about numbers in front of her. He takes an sorted array of N integers, and asks |-chan for a number K. If the number exists in the array, he will return the i

// ndex where the number is present, else he returns the index where it would be if it were inserted in order. This task seems to be very difficult for Kazama, so he asks you for help. H
// elp him, or else he will lose his friendship with |-chan.


// Sample Input
// 4
// 1 3 5 6
// 5

// Sample Output
// 2



let arr = [1,3,5,6] , n=arr.length , k=5
console.log(myfun(arr,n,k))
function myfun(arr,n,k){
    for(let i=0; i<n; i++){
        if(arr[i]==k){
            return i
        }
    }
    for(let i=0; i<n; i++){
        if(arr[i]>k){
            return i
        }
    }
}

