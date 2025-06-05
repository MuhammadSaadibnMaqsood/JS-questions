//  Question #53

// Sequential API Simulation
// Simulate calling two APIs one after the other with delays. Ensure the second call waits for the first to finish.

// const api1 = [
//     {
//         name: "Saad",
//         age: 21
//     },
//     {
//         name: "Moiz",
//         age: 21
//     },
//     {
//         name: "Hammad",
//         age: 24
//     }
// ]
// const api2 = [
//     {
//         Counry: "Pakistan",
//         State: "karachi"
//     },
//     {
//         Counry: "Pakistan",
//         State: "Hyderabad"
//     },
//     {
//         Counry: "America",
//         State: "New york"
//     }
// ]

// function fetchApi1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(api1);
//         }, 2000);
//     })
// }
// function fetchApi2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(api2);
//         }, 2000);
//     })
// }
// async function fetchdata() {
//     console.log('Fetching data from api 1....');
//     let personalDetail = await fetchApi1();
//     console.log(personalDetail);

//     console.log('Fetching data from api 2....');
//     let countryDetail = await fetchApi2();
//     console.log(countryDetail);

//     console.log('Fetching completed');


// }

// fetchdata();

// Question #54

// Parallel vs Sequential Calls
// Write two versions:

// One where three async functions run sequentially.

// One where they run in parallel using Promise.all.

// function api1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Api1');
//         }, 3000);
//     })
// }
// function api2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Api2');
//         }, 5000);
//     })
// }
// function api3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Api3');
//         }, 4000);
//     })
// }

// async function fetchData() {

//     console.log('Fetchin from api 1....');
//     let apicall1 = await api1();
//     console.log('Api1 call complete');


//     console.log('Fetchin from api 2....');
//     let apicall2 = await api1();
//     console.log('Api2 call complete');

//     console.log('Fetchin from api 3....');
//     let apicall3 = await api1();
//     console.log('Api3 call complete');



// }
// fetchData();

// parallel calls

// async function parallel() {
//     console.log("Starting parallel calls...");
//     const [result1, result2, result3] = await Promise.all([api1(), api2(), api3()]);

//     console.log(result1, result2, result3);

// }

// parallel();