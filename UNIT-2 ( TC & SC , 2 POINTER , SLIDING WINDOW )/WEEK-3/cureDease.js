// Cure a disease Ended
// Description

// A new deadly virus has infected large population of a planet. Scientists have discovered 
// a new strain of virus which can cure this disease. Vaccine produced from this virus has various strength.

// A person is cured only if strength in vaccine batch is more than midichlorians count of person.

// A doctor receives a new set of report which contains midichlorians count of each infected patient, 
// You have all vaccine doctor has and their strengths. You need to determine if doctor can save all patients 
// with the vaccines he has. The number of vaccines and patients are equal.


// Sample Input 1 

// 5
// 123 146 454 542 456
// 100 328 248 689 200
// Sample Output 1

// No
// Hint

// In the sample test case, the person with midichlorians count of689, cannot be saved, as 
// there is no vaccine available with the strength greater than that,
//  therefore, the answer isNo
let arr1 = [123,146,454,542,456] , arr2 = [100,328,248,689,200] , n=5
console.log(myfun(n,arr1,arr2))
function myfun(n,arr1,arr2){
    let max = -Infinity;
    for(let i=0; i<n; i++){
        if(arr2[i]>max){
            max=arr2[i]
        }
    }
    for(let j=0; j<n; j++){
        if(max>arr2[j]){
            return "No"
        }
    }
    return "Yes"
}
