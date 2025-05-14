// question #23

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// function replaceFirstLetter(str) {

//     console.log(str.replace(/\b\w/g, l => l.toUpperCase()));

// }

// replaceFirstLetter("saad is a good boy");

// question #24

// Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.

// function debounce(func, time) {

//     let timer;
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(func, time);

//     }
// }

// function sayHello() {
//     console.log("Hello");

// }

// const debounceHello = debounce(sayHello,2000)

// debounceHello();
// debounceHello();
// debounceHello();
