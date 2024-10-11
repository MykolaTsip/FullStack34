

// let arr1 = [1, null, 'hello', 'ffdd', true, false];
// console.log(arr1);


// arr1.push(4);
// console.log(arr1);


// arr1.unshift(100)
// console.log(arr1);


// arr1.shift()
// arr1.shift()
// console.log(arr1);


// arr1.pop();
// arr1.pop();
// console.log(arr1);



let arr2 = [1, null, 'hello', 'ffdd', true, false];
// console.log(arr2);


// arr2.splice(2, 2);
// arr2.splice(2, 2, 11, 12, 13)
// console.log(arr2);


let arr3 = arr2;
let arr4 = arr2.slice()

arr2[1] = undefined;


console.log(arr3);
console.log(arr2);
console.log(arr4);


let arr5 = arr2.slice(2, 6);
console.log(arr5);


arr2.forEach(function (element, index, array) {
    console.log(
        ' Element : ', element,
        ' Index : ', index,
        ' Array : ', array
    );
})






