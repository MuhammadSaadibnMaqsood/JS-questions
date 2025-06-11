 // Question 59

        // Write a function rotateMatrix(matrix) that rotates a square 2D matrix (NxN) 90 degrees clockwise in-place.

        // const matrix = [
        //     [1, 2, 3],
        //     [4, 5, 6],
        //     [7, 8, 9]
        // ];

        // function rotateMatrix(matrix) {
        //     // Step 1: Transpose the matrix (swap rows with columns)
        //     for (let i = 0; i < matrix.length; i++) {
        //         for (let j = i + 1; j < matrix[i].length; j++) {  // Fixed: matrix[i].length
        //             let temp = matrix[i][j];
        //             matrix[i][j] = matrix[j][i];
        //             matrix[j][i] = temp;
        //         }
        //     }

        //     // Step 2: Reverse each row to complete the rotation
        //     for (let i = 0; i < matrix.length; i++) {
        //         matrix[i].reverse();
        //     }

        //     return matrix;
        // }

        // console.log(rotateMatrix(matrix));


        // Question 60

        //  Write a function searchMatrix(matrix, target) that searches for a number in a sorted 2D matrix, where:

        //1. Each row is sorted in ascending order.

        //2. The first number of each row is greater than the last number of the previous row.

        // function searchMatrix(matrix, target) {

        //     let index = []

        //    for (let i = 0; i < matrix.length; i++) {
        //         for (let j = 0; j < matrix[i].length; j++) { 
        //            if( matrix[i][j] === target){

        //             index = [i,j]
        //             console.log('Target found on index: ',index);
        //             return true
        //             break;
                    
        //            }
                   
        //         }
        //     }
        //     return false
        // }

        // const matrix = [
        //     [1, 3, 5, 7],
        //     [10, 11, 16, 20],
        //     [23, 30, 34, 60]
        // ];
        // const target = 106;
        // console.log(

        //     searchMatrix(matrix, target)
        // );