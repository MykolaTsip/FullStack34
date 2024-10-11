
let array = [ 1, null, undefined, 'dfsdf', 'sdfsdfsd', 5555, 'fsdfd', 222, 444, 111 ];


let obj = {
    asf: 11,
    bsdf: true,
    csfd: null,
    dfsd: 'Hello',
    edfss: 100,
}


// console.log(obj.length);

// classic for
for (let i = 0; i < array.length; i++) {
    console.log(array[i], typeof array[i]);
}

console.log('------------');

// for of
for (let element of array) {
    console.log(element);
}

// let a = 20;
// for (let el of a) {
//     console.log(el);
// }

// for (let el of obj) {
//     console.log(el);
// }


console.log('------------');

// for in
for (let i in array) {
    console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}


// obj['bsdf']




console.log('------------');

// while
let a = 0

while (a < 20) {
    if (a === 5) {
        a += 5
    } else {
        a++
    }

    console.log(222, a);
}



// do while

let b = 100000;

do {
    console.log(b, 'do while');

    b++;
} while (b <= 10)


