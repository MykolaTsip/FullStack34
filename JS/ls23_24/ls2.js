
let myArray = [3, 4, 5, 6, -1, -2];


// arr.forEach((el) => {
//     console.log(el);
// })



function myForEach(arr = [], fn) {
    for (let i = 0; i <= arr.length -1; i++) {
        fn(arr[i], i, arr)
    }
}

// myForEach()
// myForEach(1, 2, 3, 4, 5, 6)

// myForEach(myArray, (el) => {
//     console.log(el);
// })


// /// /// 


// myArray.filter((el) => {
//     // return true
// })
function myFilter(arr, fn) {
    let filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let isGoodElement = fn(arr[i], i, arr);

        if (isGoodElement) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}


let newArr = myFilter(myArray, (el) => {
    return el > 0
})
console.log(newArr);

