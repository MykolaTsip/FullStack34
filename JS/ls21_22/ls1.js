
// let user = {
//     id: 199,
//     l_name: 'DDDD',
//     f_name: 'LLLL',
//     age: 33,
//     employee: 'Front-end',
//     skilss: ['HTML', 'CSS', 'JS'],
//     keys: function () {}
// }

// console.log(user);


// function ArraysFromKeys(obj) {
//     let keyArray = [];
    
//     for (let field in obj) {
//         keyArray.push(field)
//     }

//     return keyArray
// }


// let keys = ArraysFromKeys(user);
// console.log(keys);



// let k1 = user.keys();
// console.log(k1);


// Number()
// String()
// Boolean()


// let keys2 = Object.keys(user); // user.keys();
// console.log(keys2);

// let valuesArr = Object.values(user);
// console.log(valuesArr);


// let keyVal = Object.entries(user);
// console.log(keyVal);


// let arrToObj = [['hello', 3], ['dddd', null], [true, false]];
// let obj2 = Object.fromEntries(arrToObj);
// console.log(obj2);


// let str = Object.toString(user);
// console.log(str);


// console.log({} + 'fd');


/////


// let newObj = {
//     a: 1,
//     b: 11,
//     c: 222
// }

// console.log(newObj);


// let nObj = Object.create({
//     a: 1,
//     b: 11,
//     c: 222
// })

// let nObj1 = Object.create({}, {
//     a: 1,
//     b: 11,
//     c: 222
// }) 


// let nObj2 = Object.create({}, {
//     a: { value: 1 },
//     b: { value: 11 },
//     c: { value: 222 }
// });

// console.log(nObj2);


let user1 = {
    id: 199,
    l_name: 'DDDD',
    f_name: 'LLLL',
    age: 33,
    employee: 'Front-end',
    skilss: ['HTML', 'CSS', 'JS'],
    keys: function () {}
}

// let user2 = user1;
// let user3 = Object.assign({}, user1);

// console.log(user1);
// console.log(user2);


// user1.id = null;
// user2.age = null;
// user3.keys = false;

// console.log(user1);
// console.log(user2);
// console.log(user3);


let us = Object.freeze(user1);

// console.log(us);


// us.id = 333
// delete us.id
// us.idd = 4343
// console.log(us);


let us1 = Object.seal(user1);
console.log(us1);


// us1.id = 333
// delete us1.id
user1.idd = 4343
console.log(user1);


let isFr = Object.isFrozen(us);
console.log(isFr);

let isSe = Object.isSealed(us1);
console.log(isSe);



let aaa = Object.getOwnPropertyNames(user1)
console.log(aaa);



console.log(user1.hasOwnPropertyNames('ss'));