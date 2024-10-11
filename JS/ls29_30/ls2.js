function Students(f_name, l_name, age, knowgless) {
    this.f_name = f_name
    this.l_name = l_name
    this.objAge = age
    this.know = knowgless


    // this.addAge = function () {
    //     this.objAge += 1
    // }
}

Students.prototype.addAge = function () {
    this.objAge +=1
    console.log(333);
}

Students.prototype.study = function () {
    console.log('i study');
}

let Petro = new Students('Petro', 'dsfsd', 34, null)
console.log(Petro);

let Danylo = new Students('Danylo', 'sdfs', 43, 'HTML/CSS');
console.log(Danylo);

let Marko = new Students('Marko', 'fsdfsd', 10, 'html,css,js,ts' )
console.log(Marko);
Marko.addAge()
// Marko.addAge()
// Marko.addAge()

console.log(Marko);


let arr = [3, 4, 5]
let arr1 = [3, 4, 5]

// Array.prototype.ee = 555;

// console.log(arr.ee);


// Array.prototype.forEach
// Array.prototype.myOwnForEach = function (fn) {
//     console.log(this);

//     for (let i = 0; i < this.length; i++) {
//         fn(this[i], i, this)
//     }
// }

// arr.myOwnForEach((el, i, a) => console.log(el, i, a))


function Frontender(f_name, l_name, age, knowgless) {
    this.f_name = f_name
    this.l_name = l_name
    this.objAge = age
    this.know = knowgless
}

// console.log(
//     Frontender.prototype
// );

Frontender.prototype = Object.assign({}, Students.prototype);
Frontender.prototype.study = function() {
    console.log('I know many things but i still study');
}

let frontN = new Frontender('dsf', 'sdfsd', 0, 'Allright');
console.log(frontN);

frontN.study()
Marko.study()
