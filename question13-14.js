// Question #13

// async function multiply(arr) {
//     let temp = [];

//     for (let element of arr) {
//         const res = await new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(element * 2);
//             }, 500);
//         });

//         temp.push(res);
//         console.log(temp);
//     }

//     return temp;
// }

// multiply([1, 2, 3, 4]).then(result => {
//     console.log("Final result:", result);
// });

// Question #14


// arr = ["Mobile", "Remote", "Mouse", "Bottle"];

// async function shop(arr) {

//     order = []
//     for (let ele of arr) {

//         const result = await new Promise((resolve) => {
//             setInterval(() => {

//                 resolve();
//             }, 1000);
//             order.push(ele);

//             console.log(order);

//         })


//     }
//     return order
// }

// shop(arr).then(result => {
//     console.log("Final order ", result);
// })
