
// let arr1 = [1, null, 'hello', 'ffdd', 'world', 444, true, false, 23, 'hello'];
// console.log(arr1);


// let filteredArr = arr1.filter((element, index, array) => {
  
//     if (typeof element === 'number') {
//         return true
//     }
// })
// console.log(filteredArr);



// let filteredArr = arr1.filter((element, index, array) => {
  
//     if (element === 'hello' || element === 'world') {
//         return true
//     }
// })
// console.log(filteredArr);



// let array = [0, 19, 10, 100, 1000, 4, 1, 5, 55];

// let filteredArr1 = array.filter((val) => {
//     if (val > 10) {
//         return true
//     }
// })

// console.log(array);
// console.log(filteredArr1);





// let numArray = [0, 19, 10, 100, 1000, 4, 1, 5, 55];

// let isBiggerZero = numArray.some((val) => {
//     if (val > 0) return true;
// });

// console.log(isBiggerZero);


// let isEvrBgZero = numArray.every((val) => {
//     if (val > 0) return true;
// })

// console.log(isEvrBgZero);



let numArray1 = [0, 19, 10, 100, 1000, 4, 1, 19, 5, 19, 55];


// let nn = numArray1.findIndex((val) => val > 10)
// numArray1[8]


// let indOfArr = numArray1.indexOf(1000);
// console.log(indOfArr);

// let indOfArr1 = numArray1.indexOf(19);
// console.log(indOfArr1);


// let inn = numArray1.lastIndexOf(19)
// console.log(inn);



// numArray1.sort();
// numArray1.sort((a, b) => {
//     // console.log('num1: ', a, 'num2: ', b);

//     // if (a > b) {
//     //     return true
//     // } else {
//     //     return false
//     // }

//     // if
//     //     return 1
//     // } else { (a > b) {
//     //     return -1
//     // }

//     // if (a < b) {
//     //     return 1
//     // } else {
//     //     return -1
//     // }

//     return a - b
// })


// numArray1.sort((a, b) => a - b)
numArray1.sort((a, b) => b - a)


console.log(numArray1);












