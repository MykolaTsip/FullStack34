
function a() {
    this.a = 1,
    this.b = true,
    this.c = null
}


a.prototype.logTwo = function () {
    console.log(22222);
}

a.prototype.logHello = function () {
    console.log('Hello');
}

a.prototype.obj = {
    sss: 88888
}

let a1 = new a();


// // //

function B() {
    this.a1 = 1,
    this.b2 = true,
    this.c3 = null
}

// B.prototype = a.prototype;

// B.prototype = Object.assign({}, a.prototype)
// B.prototype = {...a.prototype} // => {logHello, logTwo}
// B.prototype = JSON.parse(JSON.stringify(a.prototype))
// B.prototype = new Map(a.prototype);
// B.prototype = for in || recurcion || libiraes (lodash)


// B.prototype = window.structuredClone(a.prototype);
let b1 = new B();

// // 
a.prototype.logHello = function () {
    console.log('NE HELLO');
}

a.prototype.obj.sss = null;

a1.logHello()
console.log(a1.obj);


// b1.logHello();
console.log(B.prototype);
console.log(b1.obj);

