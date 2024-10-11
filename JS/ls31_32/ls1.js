function nn() {
    // let a = 11
    this.a = 11
};

console.log(nn);
// nn.prototype.hello = function () {
//     console.log('Hello');
// }

// let oopOBJ = new nn();
// console.log(oopOBJ);

// // nn.hello()
// // console.log(nn);
// oopOBJ.hello()


class Nn {
    a = 11;
    b = true;

    hello() {
        // this.a
        console.log('hello', this.a);
    }
}

console.log(Nn);

// let firstClass = Nn();
// console.log(firstClass);

let firstClass = new Nn();
console.log(firstClass);


class Counter {
    stateNumber = 0;

    add() {
        this.stateNumber = this.stateNumber + 1;
    }
    
    min() {
        this.stateNumber = this.stateNumber - 1;
    }
}

let myCounter = new Counter();

console.log(myCounter);
myCounter.add()
console.log(myCounter.stateNumber);
myCounter.add()
console.log(myCounter);
myCounter.add()
myCounter.add()
myCounter.add()
myCounter.add()
console.log(myCounter);
myCounter.min()
console.log(myCounter);


let secondCount = new Counter()
console.log(secondCount);
console.log(myCounter);


let fromnn = new nn();


let a11 = true

console.log(typeof a11 === 'string');

console.log(secondCount instanceof Counter);
console.log(secondCount instanceof Nn);
console.log(fromnn instanceof nn);
