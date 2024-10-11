
// function myFunk(a, c, b = true) {
//     // console.log(arguments);
//     console.log(222);


//     return a + b
// }


// let a = myFunk(1, 5, 4) // 5
// myFunk()


// let arr1 = [3, 5, 6, 34, 32, 11];

// forEach, for, for of, for in, while, do while


// function arrFunk(arr = [], index = 0) {

//     if (arr.length > index) {
//         console.log(arr[index], index);
//         // arrFunk(arr, index+1)
//         arrFunk(arr, ++index)
//     }
// }

// arrFunk(arr1)


// function arrFunk1(are, i) {
//     if (are.length < i) {
//         return
//     }

//     console.log(are[i], i);
//     arrFunk(are, ++i)
// }

// arrFunk1(arr1, 0)



// function iterNum(startNum, endNum) {
//     if (startNum > endNum) {
//         return
//     }

//     console.log(startNum);
//     iterNum(++startNum, endNum)


//     // if (startNum <= endNum) {
//     //     console.log(startNum);
//     //     iterNum(++startNum, endNum)
//     // }
// }



// iterNum(1, 10)