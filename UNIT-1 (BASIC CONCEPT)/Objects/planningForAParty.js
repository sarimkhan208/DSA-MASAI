// Planning for a party @ Ended

// Description

// Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of p
// eople they have taken help from. Each person, has been assigned a unique ID, in the form of a number.

// Both, Jim and Pam make their separate invite list a and 8 based on the number of people, they have taken help from. Find out if the lists created by the two of them are same or no
// t

// Note: A person might have helped them multiple times, and obviously would be invited only once


// Sample input
// 6
// 1 2 2 3 4 5
// 6
// 1 2 3 4 5 5

// Sample Output
// Yes


let PamID = [1,2,2,3,4,5] ,N=PamID;
let JimID = [1,2,3,4,5,5] ,M=JimID;
partyPlanning(N,PamID,M,JimID)
function partyPlanning(N,PamID,M,JimID){
    let obj1 = {};
    let obj2 = {};
    for(let i=0; i<N; i++){
        if(obj1[PamID[i]] == undefined){
            obj1[PamID[i]] = 1;
        }
        else{
             obj1[PamID[i]]++
        }
    }
    for(let j=0; j<M; j++){
        if(obj2[JimID[j]] == undefined){
            obj2[JimID[j]] = 1;
        }
        else{
             obj2[JimID[j]]++
        }
    }
    let bag1 ="";
    let bag2 ="";
    for(let key in obj1){
        bag1+=key
    }
    for(let key in obj2){
        bag2+=key
    }
    if(bag1 == bag2){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
