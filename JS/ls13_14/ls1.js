// Anonim function

const funk = function () {}

const funk1 = () => {}



// function () {}
// a => {console.log(33)}

// (function () {
//     console.log(43543);
// });


// (() => {console.log(333);})


// Self invoke funkction

// (() => {console.log(333);})()

// (function () {
//     console.log('Hello world');
// })();

// console.log('Hello world');



// Function in function
// function fnk() {
//     fff()
//     console.log(222);
//     nnn()
// }


// function fff() {
//     console.log(111);
//     dd()
// }

// function dd() {
//     console.log(`1.5`);
// }

// function nnn() {
//     console.log(44);
// }

// fnk();

// gg()


// function gg() {
//     function ll() {
//         console.log(222);
//     }

//     function aa() {
//         console.log('Hello');
//     }


//     aa()
//     ll();
// }


// ll()



function calc(a, b, ac) {
    function add () { return a + b}
    function min () { return a - b}

    if (ac === '+') {
        console.log(add());
    } else {
        console.log(min());
    }
}


calc(1, 2, '+')




function add1 (n1, n2) { return n1 + n2}
function min1 (n1, n2) { return n1 - n2}

function calc1(a, b, ac) {

    if (ac === '+') {
        console.log(add1(a, b));
        return add1(a, b)
    } else {
        console.log(min1(a, b));
    }
}


let s = calc1(4, 5, '+')
console.log(s);