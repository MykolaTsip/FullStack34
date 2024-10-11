

let a = Math.round(10.4)
console.log(a);

let b = Math.round(10.5);
console.log(b);


let c = Math.ceil(20.1)
console.log(c);

let d = Math.floor(20.9)
console.log(d);


let user = {
    a: 11,
    b: 'dfd',
    c: 'Hello world'
}

console.log(user);
console.log(Math);



let arrNum = [1, 4, 6, 7, 9, 9999, 2, 1, 0, 111]


function getMaxNumber(arr) {
    let maxNumber = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > maxNumber && typeof arr[i] === "number") {
            maxNumber = arr[i]
        }
    }

    return maxNumber;
};


let myNum = getMaxNumber(arrNum);
console.log(myNum);


let nnn = getMaxNumber([1, 888, -10, 9, 1, 0])
console.log(nnn);


// let maxN = Math.max(arrNum);
let maxN = Math.max(1, 4, 6, 7, 9, 9999, 2, 1, 0, 111);
console.log(maxN);

        //  1, 4, 6, 7, 9, 9999, 2, 1, 0, 111
let num11 = Math.max(...arrNum);


let minN = Math.min(1, 4, 6, 7, 9, 9999, 2, 1, 0, 111)
console.log(minN);

let num22 = Math.min(...arrNum);
console.log(num22);


console.log('----------------');

let kva = Math.pow(5, 5)
console.log(kva);

let kk = 5**5;


kk = Math.cbrt(600);
console.log(kk);

console.log('----------------');

let mySin = Math.sin(0.7);
console.log(mySin);
let mySin1 = Math.cos(0.3);
console.log(mySin1);
let mySin2 = Math.tan(0.4);
console.log(mySin2);


// 
console.log('----------------');

let myranN = Math.random();
console.log(myranN);

let myranN1 = 500 + Math.round(Math.random() * 500);
console.log(myranN1);




