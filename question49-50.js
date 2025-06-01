// Question #49

// Promise chainning

// Promise.resolve(1)
//     .then(val => {
//         console.log(val)
//         return val * 2
//     })
//     .then(val => {
//         console.log(val);
//         throw new Error("Error");

//     })
//     .catch(err => {
//         console.log(err.message);
//         return 10;
//     })
//     .then(val => {
//         console.log(val);

//     })

// Question #50

// Constructor Function with Explicit Return

// function returnObj(){

//     return {name: "Saad",age: 21};
// }
// const obj = returnObj();
// console.log(obj.name);
// console.log(obj.age);
