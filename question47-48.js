// Question #47

// How to explain closures in JavaScript and when to use them?

// function bankAccount() {
//     let balance = 0;

//     function deposit(amount) {
//         if (amount < 0) {
//             console.log("Amount must be greater than zero");
//             return;
//         }
//         else if (amount > 0) {
//             balance = balance + amount;
//             console.log(`${amount} is deposited`);
//             return;
//         }
//     }
//     function checkBalance() {
//         console.log(`Your total balance is ${balance}`);
//         return;

//     }

//     return{
//         deposit,
//         checkBalance
//     };
// }

// const myAccount = bankAccount();

// myAccount.deposit(500);
// myAccount.deposit(1000);
// myAccount.checkBalance();

//  Question #48

//  Asynchronous Execution & Microtasks

// async function print() {

//     console.log("1");
//     await console.log("2");


// }
// console.log("3");
// print();
// console.log("4");