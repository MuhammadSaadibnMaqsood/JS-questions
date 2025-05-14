// question #21

// const color = [[2,3],[4,5],[7,8],[9,1],[1,4],[5,8]];

// function findCordinator(color){
//     let cordinator = [];
//     let cord = Infinity;
//     for(let i = 0; i < color.length; i++){
//         for(let j = 0; j < color[i].length; j++){
//             if(color[i][j] < cord){
//                 cord = color[i][j];
//             }



//         }
//         cordinator.push(cord);
//         cord = Infinity;
//     }
//     console.log(cordinator);

// }
// findCordinator(color);

// question #22

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

// function FebonacciSeries(num){
//     if(num <=0) return []
//     if(num === 1) return [1]
//     if(num === 2) return [0,1]

//     let sequence = [0,1];

//     for(let i = 2; i < num; i++){
//         let nextNum = sequence[i-1] + sequence[i -2]
//         sequence.push(nextNum);
//     }
//     return sequence
// }

// console.log(FebonacciSeries(6));