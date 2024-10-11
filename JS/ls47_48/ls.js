

let a = {
    a1: 444,
    b1: true,
    c1: null
}


console.log({...a});// ll}  {a1: 444, b1: true, c1: nu// => a1: 444, b1: true, c1: null => {}


let b = [3, 4, 5, 6, 3, 33, 1];


// console.log(Math.max(b)); // [3, 4, 5, 6, 3, 33, 1] => 3, 4, 5, 6, 3, 33, 1

// console.log(Math.max(b[0], b[1], b[2]));

console.log(Math.max(...b));



function logator(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

logator(4, null, false);
logator(...b);

let aOb = {
    c1: 1,
    d1: 3333
}

console.log({b1: 'Hello world', ...a, ...aOb, rrr: 4353453});



// function maxNum () {
//     if (arguments.length) {
//         let maxN = arguments[0];
//         // console.log(arguments);
    
//         for (let i = 0; i <= arguments.length; i++) {
//             if (typeof arguments[i] === 'number') {
//                 if (maxN < arguments[i]) {
//                     maxN = arguments[i]
//                 }
//             } else {
//                 null
//             }
//         }

//         return maxN
//     } else {
//         return null
//     }
// }


// let n1 = maxNum(1, 4, 5, 1, 0, 11, 1);
// console.log(n1);
// console.log(maxNum(...b));


// const maxNum = (...data) => {
//     console.log(data);
//     if (data.length) {
//         let maxN = data[0];
    
//         for (let i = 0; i <= data.length; i++) {
//             if (typeof data[i] === 'number') {
//                 if (maxN < data[i]) {
//                     maxN = data[i]
//                 }
//             } else {
//                 null
//             }
//         }

//         return maxN
//     } else {
//         return null
//     }
// }


// let max = maxNum(3, 9999, 5, 111, 2, 4, 5);
// console.log(max);



const user = {
    fff: null,
    id: 444,
    data: {
        accout_bal: 33,
        curr: '$',
        location: {
            country: {
                name: 'USA',
                are: {
                    name: 'dfsdfs',
                    gov: 'dfsdf',
                    year: 3000,
                    population: 533434
                }
            }
        }
    }
};


// console.log(user.data.accout_bal, user.data.curr, user.id, user.data.location.country.name);

// let user_accout_bal = user.data.accout_bal;
// let user_curr = user.data.curr;
// let user_id = user.id;
// let user_country_name = user.data.location.country.name;


let {id, fff, dddd = 'dfsd', data: { accout_bal, curr: currency, location: {country: {name, country_code = 'Nema'}} } } = user;

console.log(id, fff, accout_bal, currency, name, country_code, dddd) ;



let arr = [1, 3, [null, 'hello', [true]]]


let [ , , [n, , arr2]] = arr;

console.log(arr);
console.log(n, arr2);



