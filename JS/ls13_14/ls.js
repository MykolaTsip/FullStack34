

function myFunk2() {} // Declaration

const myFunk1 = function () {} // Expression

// Arrow function
const myFunk3 = () => {} // Expression


// function Dd () => {}
// Dd () => {}


// () => {}
// a => {}
// b =>
// () =>  


// const m3 = num => { console.log(222) }

// const m4 = (a, b) => console.log(222)


function plusator(n1, n2, n3 = 0) {

    console.log(arguments[0]);

    result = n1 + n2 + n3

    return result;
};


// let sum = plusator(3, 4)
// let sum1 = plusator(3, 4, 1)

// console.log(sum);
// console.log(sum1);


// let sum2 = plusator(1, 2, 3, 4, 5);
// console.log(sum2);


// let su32 = plusator(1, 2, 3, 4, 5, 10, 13, 2, 1, 33);
// console.log(sum2);


// function plusator1(n1, n2, n3 = 0) {

//     // console.log(arguments[0], arguments[1], arguments[4]);
//     console.log(arguments);
//     // console.log(n1, n2, n3);

//     // for (let el of arguments) {
//     //     console.log(el);
//     // }

//     for (let i = 0; i <= arguments.length - 1; i++) {
//         console.log(arguments[i]);
//     }

//     result = n1 + n2 + n3

//     return result;
// };

// let sm4 = plusator1(1, 2, 3, 4, 5, 10, 13, 2, 1, 33);
// console.log(sm4, '------');

// console.log([1, 2, 3, 4, 5, 10, 13, 2, 1, 33]);


// console.log(arguments);


let arrF = (n1, n2, n3) => {
    // console.log(arguments[0], arguments[1], arguments[4]);
    // console.log(arguments);
    // console.log(n1, n2, n3);

    // for (let el of arguments) {
    //     console.log(el);
    // }

    // for (let i = 0; i <= arguments.length - 1; i++) {
    //     console.log(arguments[i]);
    // }

    result = n1 + n2 + n3

    return result;
}

let varriab = arrF(4, 5, 6, 1, 3, 4);
console.log(varriab);