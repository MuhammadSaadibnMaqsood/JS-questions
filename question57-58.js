 // Question #57 

        // We need to take 10 input prompt from user and need to identify the even ad odd number and also  how can we we make multiple prompt

        // function takeInputAndIdentity() {

        //     let even = []
        //     let odd = []

        //     for (let i = 0; i < 10; i++) {

        //         let input = Number(prompt('Enter a num: '));



        //         if (isNaN(input)) {
        //             alert('Only num are allowed');
        //             i--;

        //         }

        //         if (input % 2 == 0) {
        //             alert('You Enter a even number');

        //             even.push(input);

        //         } else if (!input % 2 == 0) {
        //             alert('You Enter a odd number');
        //             odd.push(input)
        //         }






        //     }

        //     alert('Total even num you enter: ' + even);
        //     alert('Total odd num you enter: ' + odd);
        // }

        // takeInputAndIdentity();

        // Question #58 

        // You are given a 2D array (matrix) of numbers. Write a function maxRowSum(matrix) that finds 
        // the row with the highest sum and returns that sum.

        // function maxRowSum(matrix) {
        //     let sumOfRow = { row1: 0, row2: 0, row3: 0,row4: 0 };
        //     let sum=0;


        //     for (let i = 0; i < matrix.length; i++) {

        //         for (let j = 0; j < matrix[i].length; j++) {

        //             sum = sum + matrix[i][j];
                    
        //         }
                
        //         console.log(sum);
        //         if (i == 0) {
        //             sumOfRow.row1 += sum;
        //             sum = 0;

        //         }
        //         else if (i == 1) {
        //             sumOfRow.row2 += sum;
        //             sum = 0;
        //         }
        //         else if (i == 2) {
        //             sumOfRow.row3 += sum;
        //             sum = 0;
        //         }
        //         else if (i == 3) {
        //             sumOfRow.row4 += sum;
        //             sum = 0;
        //         }

        //     }
        //     console.log(sumOfRow);
            
            

        // }

        // const matrix = [
        //     [1, 2, 3],
        //     [4, 5, 6],
        //     [10, 1, 1],
        //     [2, 2, 2]
        // ];

        // maxRowSum(matrix);