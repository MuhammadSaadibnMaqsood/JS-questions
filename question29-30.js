// Question #29

// . Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

// merging two array

// let sortarr1 = [2,3,4,5,6,7]
// let sortarr2 = [1,2,3,8,9,10]

// function margesortedarr(arr1,arr2){
//     let mergarr = [...arr1,...arr2];
//     console.log(mergarr);



// }
// margesortedarr(sortarr1,sortarr2);

// merge, sort and eleminate reapeted value

// let sortarr1 = [2,3,4,5,6,7]
// let sortarr2 = [1,2,3,8,9,10]

// function margesortedarr(arr1,arr2){
//     let mergarr = [...arr1,...arr2];
//     sorted = [];

//     for(let i = 0; i < mergarr.length; i++){
//         if(!sorted.includes(mergarr[i])){
//             sorted.push(mergarr[i]);
//         }
//     }
//     return sorted.sort((a,b)=> a-b);



// }
// console.log(margesortedarr(sortarr1,sortarr2));

// Question #30

// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.

// function checkPalindrom(string){
//     reversestring =  string.toLowerCase().split('').reverse().join('');


//     if(reversestring === string.toLowerCase()){
//         console.log("String is palindrome");

//     }else if(reversestring != string.toLowerCase()){
//         console.log("String is not palindrome");
//     }else{
//         console.log("Invalid input");
//     }

// }
// checkPalindrom("Madam");
// checkPalindrom("Saad");