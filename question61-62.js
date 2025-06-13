        // Question #61

        // Write a function mergeObjects(obj1, obj2) that merges two objects without overwriting existing keys in obj1.
        // If a key exists in both, keep the value from obj1.

        // function mergeObjects(obj1,obj2){
        //     let newObj = {...obj1}

        //     for(const key in obj2){
        //         if(!(key in obj1)){
        //             newObj[key] = obj2[key]
        //         }
        //     }

        //     return newObj
        // }

        // const obj1 = { a: 1, b: 2 };
        // const obj2 = { b: 99, c: 3 };
        // console.log(
        //     mergeObjects(obj1, obj2)

        // );

        // Question #62


        // Write a function countKeys(obj) that counts all keys, including keys inside nested objects (deep level).

        // function countKey(data) {
        //     count = 0
        //     for (const key in data) {
        //         count++

        //         if (typeof data[key] === 'object' && data[key] != null) {

        //             count += countKey(data[key]);

        //         }

        //     }

        //     return count

        // }

        // const data = {
        //     name: 'John',
        //     address: {
        //         city: 'Lahore',
        //         geo: {
        //             lat: 24.0,
        //             lng: 67.0
        //         }
        //     },
        //     email: 'john@example.com'
        // };

        // console.log(
        //     countKey(data)

        // );