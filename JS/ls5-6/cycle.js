
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

                                // start++
// for (let start = 0; start <= 10; start = start + 1) {
//     // console.log(0);
//     console.log(start);
// }



// for (let s = 10; s <= 30; s++) {
//     console.log(s);
// }

// for (let s = 20; s >= 10; s--) {
//     console.log(s);
// }


let array = [ 1, null, undefined, 'dfsdf', 'sdfsdfsd', 5555, 'fsdfd', 222, 444, 111 ]


console.log(array, array.length);

// for (let index = 0; index <= array.length - 1; index++) { // index < array.length    index <= array.length - 1
//     console.log(array[index]);
// }

// for (let index = 0; index <= array.length - 1; index--) { // 0 -1 -2 -3 -4 -5...
//     console.log(array[index]);
// }

for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
}


let a = ['dd', 'dfd', 'dffs', true, , false]

console.log(a, a[4], a[5], a[6], a[100]);

a[40] = 'Hellow'
console.log(a);



let emptyArr = [];
console.log(emptyArr);

for (let i = 0; i <= 100; i++) {
    emptyArr[i] = i
}

console.log(emptyArr);


emptyArr[3] = true;

console.log(emptyArr);


delete emptyArr[5];

console.log(emptyArr);


let user = {
    a: 11,
    b: 12,
    c: 13
}

console.log(user);

delete user.b

console.log(user);