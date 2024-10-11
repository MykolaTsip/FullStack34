
// let arr2 = [1, null, 'hello', 'ffdd', 444, true, false, 23];

// let arr3 = [0, 3, 455, 33];

// let count = 0

// function findElement(arr, findEl) {

//     for (let i = 0; i <= arr.length -1; i++) {
//         count++
//         if (arr[i] === findEl) {
//             // return [arr[i], i, arr]
//             console.log(' I found element: ', arr[i], ' on index: ', i, 'Your Array: ', arr);
//             break;
//             // return;
//         }
//     }
// }


// findElement(arr2, 444) // count = 5
// findElement(arr2, 'hello') // count = 8
// // findElement(arr3, 455)

// console.log(count);



let arr4 = [1, null, 'hello', 'ffdd', 444, true, false, 23];

// let a = arr4.find(444);

// let a = arr4.find(function (el, i, arr) {
//     console.log(el, i);

//     if (el === 444) {
//         // return el
//         return true;
//         // return false
//     }
// });


//  (a, b) => {} 
//  a => {}
// () => {}
// () =>
// e => 

// let a = arr4.find((el, i, arr) => {
//     console.log(el, i);

//     if (el === 444) {
//         // return el
//         return true;
//         // return false
//     }
// });

// let a = arr4.find(el => {
//     if (el === 444) {
//         // return el
//         return true;
//         // return false
//     }
// });

            //    () => return true  
let a = arr4.find(el => el === 444);

console.log(a);
console.log(a === 444);

