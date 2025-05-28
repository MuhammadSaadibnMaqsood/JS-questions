// Question #43

// Implement a function that finds the second smallest element in an array of integers.
// function findSecondSmallest(arr) {
//     if (arr.length < 2) {
//         console.log("Array must have at least two elements.");
//         return;
//     }

//     const min = Math.min(...arr);
//     const remaining = arr.filter(item => item !== min);

//     if (remaining.length === 0) {
//         console.log("No second smallest: all elements are the same.");
//         return;
//     }

//     const secondSmallest = Math.min(...remaining);
//     console.log("Second smallest num is:", secondSmallest);
// }

// let arr = [2, 3,2,6,1];
// findSecondSmallest(arr);

// Question #44

// Write a function that generates a random alphanumeric string of a given length.

// function generateRandomString(num) {
//     if (!num === 1 || !num < 1) {
//         const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         let result = '';
//         for (let i = 0; i < num; i++) {

//             let random = Math.floor(Math.random() * 7);
//             result = result + character.charAt(random);


//         }
//         console.log(result);

//     } else {
//         console.log("Num must be greater than 1");

//     }

// }
// let num = 10;
// generateRandomString(num)