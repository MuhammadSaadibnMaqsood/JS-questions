// Question #51

// CHUNCK ARRAY
// Divide an array into smaller chunks of a specified size.
// There are two way to solve it
// Way#1

// function chunck(arr, size) {
//     let chunckHolder = []
//     let temparr = []
//     let arrlength = Math.floor(arr.length / size);




//     for (let i = 0; i < arrlength + 1; i++) {
//         for (let j = 0; j < size; j++) {
//             ele = arr.shift();
//             temparr.push(ele);
//         }
//         chunckHolder.push(temparr);
//         temparr = [];

//     }
//     console.log(chunckHolder);

// }
// let arr = [2, 2, 4, 5, 6, 7, 8, 8, 9, 0, 1, 2, 3];
// divideArrSize = [5];
// chunck(arr, divideArrSize);

// way#2

// function chunk(arr, size) {
//     const chunkHolder = [];

//     for (let i = 0; i < arr.length; i += size) {
//         chunkHolder.push(arr.slice(i, i + size));
//     }

//     console.log(chunkHolder);
// }

// const arr = [2, 2, 4, 5, 6, 7, 8, 8, 9, 0, 1, 2, 3];
// const divideArrSize = 5;
// chunk(arr, divideArrSize);

// Question #52

// Classic challenge to print numbers and specific words based on divisibility.


// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("Fizz");
//         else if (i % 5 === 0) console.log("Buzz");
//         else console.log(i);
//     }
// }

// fizzBuzz(20);
