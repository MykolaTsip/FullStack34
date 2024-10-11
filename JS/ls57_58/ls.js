
// let a = 44
// let b = 'dfsd'
let c = {
    a1: 333,
    a2: this.a1
}


function dd(p1, p2) {
    this.a = 1;
    this.b

    console.log(this.a, this.b, this.c, p1, p2);
}


dd.prototype.loger = function () {
    console.log(this.a, this.b, this.c);
}

// class cc {
//     a = 1
// }

dd.call({b: true, c: 'Hello world'}, 4, 5555)
dd.apply({b: 11111, c: 'rrrrrr'}, ['p1', 'p2'])

let newDD = dd.bind({b: 'BIND', c: 33333}, 'BIND', 'BIND')

newDD()

let a = new dd()
let b = new dd()

a.loger()