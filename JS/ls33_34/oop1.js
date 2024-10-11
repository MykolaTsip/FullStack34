// Наслідування

class Person {
    name = 'Ivan';
    age = 20;
    job = 'IT';

    constructor(name) {
        this.name = name;
    }

    study() {
        console.log('i am studing');
    }
}

// class Aaa {

// }


class Programmer extends Person {
    // name = 'Ivan'
    // age = 20
    job = 'Front'
    skill = 'html/css/js/ts/angular/react'

    constructor(name, job) {
        super(name)
        this.job = job
    }

    // study() {
    //     console.log('i am studing');
    // }

    writeCode () {
        super.study()
        console.log('i am writing code');
    }
}

let per = new Person('Petro');
let prog = new Programmer('Pavlo', 'Designer');

console.log(
    per,
    prog
);

per.study();
prog.study();


// per.writeCode();
prog.writeCode();
prog.study()



// function Animal() {
//     this.name = 'ddd'
// };


// Animal.prototype.go = () => console.log('GO GO GO')


// function People() {
//     this.name = 'fdfdf'
// }

// People.prototype = {...Animal.prototype};


// let P = new People();
// P.go()


