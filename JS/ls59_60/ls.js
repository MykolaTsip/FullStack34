

function a() {
    let a = 0;
    ++a;
    return a;
}


console.log(a());
console.log(a());
console.log(a());
console.log(a());


function* b() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


// console.log(b().next());
// console.log(b().next());
// console.log(b().next());
// console.log(b().next());


let n1 = b();

console.log(n1.next());
console.log(n1.next());
console.log(n1.next());
// console.log(n1.throw());
console.log(n1.next());
console.log(n1.next());


// let ob1 = Object.create({})
// let ob2 = {}


// let ob3 = {};
// ob3.create()



// let ob4 = Object.create({})


// Object.freeze()
// Object.seal()

let ob5 = Object.create({}, {
    a1: {
        value: 434,
        enumerable: true,
        writable: true,
        configurable: false
    },
    //  434,
    a2: {
        value: true,
        enumerable: true,
        writable: true
    },
    // true,
    b3: {
        value: 'Hello',
        writable: false,
        configurable: true
    },
    // 'Hello'
    cn: {
        get() {
            return Math.round(Math.random() * 1000)
        },
        set(data) {
            this.a2 = 'Hello world'
        }
    }
})


// let ob6 = {
//     a1: 434,
//     a2: true,
//     b3: 'Hello'
// }


// console.log(ob5);
// console.log(ob6);

// // Loop
// for (let i in ob6) {
//     console.log(i);
// }

// for (let i in ob5) {
//     console.log(i, 'Prop Des');
// }

// //  Rewriting
// ob5.a1 = null;
// ob5.b3 = null
// console.log(ob5, 'Prop Des');

// ob6.a1 = null;
// console.log(ob6);

// //  Deliting
// delete ob5.a2;
// delete ob5.b3;

// console.log(ob5, 'Prop Des');

// delete ob6.a2;
// console.log(ob6);

console.log(ob5);
console.log(ob5.cn);

ob5.cn = null;
console.log(ob5.cn);
console.log(ob5.cn);
console.log(ob5.cn);
console.log(ob5.cn);

console.log(ob5.a2);



let ob7 = {
    "a": 'ddd',
    '44': 222
};




let m1 = new Map(Object.entries(ob7));

console.log(m1);

// console.log(m1.values());
console.log(m1.get('44'));
m1.set({a:1}, 1111111);
m1.set([], null);
m1.set(undefined, undefined)
m1.set('undefined', undefined)



m1.forEach((val, key) => console.log(key, val))

// == ===


console.log(m1.has('aa'));

m1.delete('a')
console.log(m1, m1.size);


m1.clear();
console.log(m1);



let arr = [1, 3, 1, 1, 1, 1, 1];
arr.push(1, 1, 1, 1)
console.log(arr);


let s1 = new Set(arr);

console.log(s1);

s1.add(11)
s1.add(11)

console.log(s1);

console.log(s1.has(1));
// console.log();

s1.forEach((v, i, a) => console.log(v, i, a));

s1.delete(11)
s1.clear();



let ob8 = {s: 111};

// Weak = слабкий
let m2 = new WeakMap();


m2.set(ob8, 111);
// m2.set('ddd', 444)
m2.set({n8: 0}, 222)


// console.log(m2);
console.log(m2.get({n8: 0}));
console.log(m2.get(ob8));
console.log(m2.get({s: 111}));


ob8 = null
console.log(m2.get(ob8));



let s2 = new WeakSet();
let ob9 = {c10: 1}
// s2.add(222)
s2.add({a: 1})
s2.add(ob9)

console.log(s2);
console.log(s2.has({a: 1}));
console.log(s2.has(ob9));
ob9 = null;
console.log(s2.has(ob9));



