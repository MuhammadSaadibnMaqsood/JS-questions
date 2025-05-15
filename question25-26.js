// questin #26

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.

// function input(arr, key) {


// if (key.toLowerCase() === 'name') {
//     arr2 = arr.sort((a, b) => a.Name.localeCompare(b.Name));
//     console.log(arr2);

// } else if (key.toLowerCase() === 'age') {
//     arr2 = arr.sort((a, b) => a.Age - b.Age);
//     console.log(arr2);
// }
// else {
//     console.log("Invalid key");

// }
// }
// arr = [{ Name: 'Saad', Age: 21 }, { Name: 'Waleed', Age: 23 }, { Name: 'Moiz', Age: 22 }]
// key = "Name"

// input(arr, key);

// question #27

// Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.


// const original = {
//     Name: "Saad",
//     Age: 21,
//     Skills: ['JS', 'React', 'Express'],
//     Qualification: "Undergraduate"
// }



// const deepCopy = JSON.parse(JSON.stringify(original));



// deepCopy.Skills.push('Nodejs');

// console.log(deepCopy);
// console.log(original);
