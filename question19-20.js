// question #19

// function greet (name,callback){
//     callback(`Hello ${name}`);
// }

// greet("Saad", message=> console.log(message));

// question #20

// laps = [[{name: "Hassan", time: 200},{name: "Saad", time: 100},{name: "Moiz", time: 300}],
//         [{name: "Hassan", time: 300},{name: "Saad", time: 200},{name: "Moiz", time: 100}],
//         [{name: "Hassan", time: 100},{name: "Saad", time: 300},{name: "Moiz", time: 200}]];

// function identifyWinner(laps){
//     let winners = []

//     for(let i = 0; i < laps.length; i++){
//         let lap = laps[i];
//         let winner = lap[0];

//         for(let j = 0; j < lap.length; j++){
//             if(winner.time > lap[j].time){
//                 winner = lap[j];
//             }
//         }

//         winners.push({lap: i +1, winner: winner.name, time: winner.time});


//     }
//         console.log(winners);
// }
// identifyWinner(laps);