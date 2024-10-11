
// let names = ['Valeria', 'Sergiy', 'Olena', 'Andriy'];
// console.log(names);

// let sortedNames = names.sort(); // a - b => number - number
// console.log(sortedNames);

// // let sortedNames1 = names.sort((a, b) => b - a);
// // console.log(sortedNames1);

// let sortedNames2 = sortedNames.reverse();
// console.log(sortedNames2);



// let arr = [1, null, [ [19, 18, 17, []]]];
// let are = [1, null, 'hello', 19, 18, 17, true, 0];


// arr.flat();
// let arr1 = arr.flat(5);
// console.log(arr.flat(5));

// let a1 = arr.flat(Infinity);
// console.log(a1);


// console.log(Infinity, typeof Infinity);


// console.log(999999 > Infinity);
// console.log(99999999 < Infinity);


let arr3 = [1, null, 'hello', 19, 18, 17, true, 0]


// let res = arr3.some(el => 19 === el)
// console.log(res);

// let res1 = arr3.includes(19)
// console.log(res1);


// if (arr3.includes(19)) {
//     console.log('URAAA');
// }


// let strFromArray = arr3.join()
// console.log(strFromArray);

// let names2 = ['Valeria', 'Sergiy', 'Olena', 'Andriy'];

// let strN = names2.join(' - ');
// console.log(strN);

// let strr = 'helo bue - sell - buy eee';

// let mass = strr.split('-');
// console.log(mass);




let names2 = ['Valeria', 'Sergiy', 'Olena', 'Andriy', 'd'];
console.log(names2);

let arr4 = names2.map((val, ind, arr) => {

    if (val.length >= 2) {
        return {
            name: val,
            id: ind,
            isKnowVerstka: true,
            isKnowJS: true,
            isKnowRact: false
        }
    }

    return val
})


console.log(arr4);


let arr5 = [3, 5, 7, 10, 0, 1, 8, 1]


let a3 = arr5.reduce((previousVal, currentVal) => {

    return previousVal + currentVal;
})
console.log(a3);


console.log(arr4);


let ids = arr4.reduce((prev, current) => {
    console.log(prev, 'Prev', current, 'Current');
//  1.id = undefined + 2 = NaN
    return prev + current.id
}, 0)

console.log(ids);
// // console.log(1.id);


